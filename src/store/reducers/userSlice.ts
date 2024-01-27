import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { addNewUser } from "../../firebase/userAPI";

type User = {
  uid: string | null;
  email: string | null;
};
type initialStateProps = {
  user: User;
  isLoading: boolean;
  error: string | null;
};
type UserProps = {
  email: string;
  password: string;
  name?: string;
};

const initialState: initialStateProps = {
  user: { email: null, uid: null },
  isLoading: true,
  error: null,
};

export const logInUser = createAsyncThunk<User, UserProps>(
  "user/log-in",
  async (props, { rejectWithValue }) => {
    const res = await signInWithEmailAndPassword(
      auth,
      props.email,
      props.password
    );
    if (!res.user) return rejectWithValue("no such user");
    const userEmail = res.user.email || null;
    return { email: userEmail, uid: res.user.uid };
  }
);

export const signUpUser = createAsyncThunk<void, UserProps>(
  "user/sign-up",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await addNewUser({ uid: res.user.uid, email, name: name || "" });
    } catch (err) {
      rejectWithValue("user isnt created");
    }
  }
);
export const signOutUser = createAsyncThunk<void, undefined>(
  "user/sign-out",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (err) {
      rejectWithValue(`User wasn't sign out`);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email;
      state.user.uid = action.payload.uid;
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
