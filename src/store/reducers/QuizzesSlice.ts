import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuizType } from "../../models/QuizTypes";
import { FirestoreDocType } from "../../firebase/userAPI";
import { getQuizzes2 } from "../../firebase/quizzesAPI";
import { RootStore } from "../store";

type InitialStateProps = {
  isLoading: boolean;
  category: string | null;
  lastDoc: FirestoreDocType | null;
  limit: number;
  limitStep: number;
  quizzes: QuizType[];
};
const initialState: InitialStateProps = {
  isLoading: false,
  category: null,
  lastDoc: null,
  limit: 5,
  limitStep: 5,
  quizzes: [],
};
export const fetchQuizzes = createAsyncThunk<QuizType[], undefined>(
  "quizzes/fetchQuizzes",
  async (_, { rejectWithValue, getState }) => {
    const state:ReturnType<typeof getState> = getState();
    const list: QuizType[] = [];
    try {
      const response = await getQuizzes2(
        state.category,
        state.limitStep,
        state.lastDoc
      );

      state.lastDoc = response.docs[response.docs.length - 1];
      response.forEach((item: FirestoreDocType) => {
        const i: any = item.data();
        const quiz: QuizType = Object.assign({ id: item.id }, i);
        list.push(quiz);
      });
    } catch (err) {
      return rejectWithValue(err);
    }
    return list;
  }
);

const QuizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.lastDoc = null;
      state.quizzes = [];
    },
  },
});

export const { setCategory } = QuizzesSlice.actions;
export default QuizzesSlice.reducer;
