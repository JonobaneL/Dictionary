import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { addNewUser, getUserInfo } from "../../firebase/userAPI";
import { UserDetails } from "../../models/UserDetailsType";

type initialStateProps = {
  user: UserDetails;
  isLoading: boolean;
  error: string | null;
};
type UserProps = {
  email: string;
  password: string;
  name?: string;
};
type FetchProps = {
  userID: string | null;
  emailVerified: boolean;
};

const initialState: initialStateProps = {
  user: {
    id: null,
    name: "",
    email: null,
    quizzes: [],
    puzzles: [],
    words: [],
    emailVerified: false,
  },
  isLoading: true,
  error: null,
};

export const logInUser = createAsyncThunk<string, UserProps>(
  "user/log-in",
  async (props, { rejectWithValue }) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        props.email,
        props.password
      );
      return res.user.uid;
    } catch (err) {
      return rejectWithValue("no such user");
    }
  }
);

export const fetchUserInfo = createAsyncThunk<UserDetails, FetchProps>(
  "user/fetch-user-info",
  async ({ userID, emailVerified }, { rejectWithValue }) => {
    if (userID == null) return initialState.user;
    const userRes = await getUserInfo(userID);
    if (!userRes) return rejectWithValue("No such user");
    const userDetails = userRes.data() as UserDetails;
    return { ...userDetails, id: userID, emailVerified };
  }
);

export const signUpUser = createAsyncThunk<void, UserProps>(
  "user/sign-up",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await addNewUser({ email, name: name || "" }, res.user.uid);
    } catch (err) {
      rejectWithValue("user isnt signed-up");
    }
  }
);
export const signOutUser = createAsyncThunk<void, undefined>(
  "user/sign-out",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (err) {
      rejectWithValue(`User wasn't signed out`);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email;
      state.user.id = action.payload.uid;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserInfo.rejected, (state) => {
        state.error = "something went wrong";
        state.isLoading = false;
      });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
