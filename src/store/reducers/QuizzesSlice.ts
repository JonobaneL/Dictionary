import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuizType } from "../../models/QuizTypes";
import { FirestoreDocType } from "../../firebase/userAPI";
import { getQuizzes } from "../../firebase/quizzesAPI";
import { useTypeSelector } from "../../hooks/useTypeReduxHooks";

type InitialStateProps = {
  isLoading: boolean;
  lastDoc: FirestoreDocType | null;
  limit: number;
  limitStep: number;
  quizzes: QuizType[];
};
const initialState: InitialStateProps = {
  isLoading: false,
  //A non-serializable value,fix
  lastDoc: null,
  limit: 5,
  limitStep: 5,
  quizzes: [],
};
type FetchResponse = {
  quizzes: QuizType[];
  doc: FirestoreDocType | null;
};

export const fetchQuizzes = createAsyncThunk<FetchResponse, string | null>(
  "quizzes/fetchQuizzes",
  async (category, { rejectWithValue }) => {
    const { limitStep, lastDoc } = useTypeSelector(
      (state) => state.quizzesReducer
    );
    const list: QuizType[] = [];
    try {
      const response = await getQuizzes(category, limitStep, lastDoc);
      response.forEach((item: FirestoreDocType) => {
        const i: any = item.data();
        const quiz: QuizType = Object.assign({ id: item.id }, i);
        list.push(quiz);
      });
      const doc = response.docs[response.docs.length - 1];
      return { quizzes: list, doc: doc };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const QuizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setLimit(state) {
      state.limit = state.limit + state.limitStep;
    },
    clearQuizzes(state) {
      state.lastDoc = null;
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
        const { quizzes, doc } = action.payload;
        state.quizzes = [...state.quizzes, ...quizzes];
        state.lastDoc = doc;
        state.isLoading = false;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
      });
  },
});

export const { setLimit, clearQuizzes } = QuizzesSlice.actions;
export default QuizzesSlice.reducer;
