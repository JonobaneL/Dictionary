import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuizType } from "../../models/QuizTypes";
import { FirestoreDocType } from "../../firebase/userAPI";
import { getLastDoc, getQuizzes } from "../../firebase/quizzesAPI";
import { RootStore } from "../store";

type InitialStateProps = {
  isLoading: boolean;
  lastDocID: string | null;
  limit: number;
  limitStep: number;
  quizzes: QuizType[];
};
const initialState: InitialStateProps = {
  isLoading: false,
  lastDocID: null,
  limit: 5,
  limitStep: 5,
  quizzes: [],
};
type FetchResponse = {
  quizzes: QuizType[];
  docID: string | null;
};

export const fetchQuizzes = createAsyncThunk<
  FetchResponse,
  string | null,
  { state: RootStore }
>("quizzes/fetchQuizzes", async (category, { rejectWithValue, getState }) => {
  const state = getState();
  const { limitStep, lastDocID } = state.quizzesReducer;
  const list: QuizType[] = [];
  try {
    const lastDoc = await getLastDoc(lastDocID);
    const response = await getQuizzes(category, limitStep, lastDoc);
    response.forEach((item: FirestoreDocType) => {
      const i: any = item.data();
      const quiz: QuizType = Object.assign({ id: item.id }, i);
      list.push(quiz);
    });
    const doc = response.docs[response.docs.length - 1];
    return { quizzes: list, docID: doc?.id || null };
  } catch (err) {
    return rejectWithValue(err);
  }
});

const QuizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    increaseLimit(state) {
      state.limit = state.limit + state.limitStep;
    },
    clearQuizzes(state) {
      state.lastDocID = null;
      state.quizzes = [];
      state.limit = state.limitStep;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        const { quizzes, docID } = action.payload;
        state.quizzes = [...state.quizzes, ...quizzes];
        state.lastDocID = docID;
        state.isLoading = false;
      })
      .addCase(fetchQuizzes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { increaseLimit, clearQuizzes } = QuizzesSlice.actions;
export default QuizzesSlice.reducer;
