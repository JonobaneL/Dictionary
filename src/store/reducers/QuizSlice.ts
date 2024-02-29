import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuestionType, QuizType } from "../../models/QuizTypes";
import { getQuiz } from "../../firebase/quizzesAPI";
import { updateUserQuizzes } from "../../firebase/userAPI";
import { RootStore } from "../store";

type InitialProps = {
  isLoading: boolean;
  id: string | null;
  name: string;
  question_index: number;
  user_answers: string[];
  answers: string[];
  questions: QuestionType[];
  right_answers: number;
};
const initialState: InitialProps = {
  isLoading: false,
  id: null,
  name: "",
  question_index: 0,
  answers: [],
  questions: [],
  user_answers: [],
  right_answers: 0,
};
export const getQuizInfo = createAsyncThunk<QuizType, string | undefined>(
  "quiz/getQuiz",
  async (quizID, { rejectWithValue }) => {
    const res = await getQuiz(quizID);
    const quiz = res.data();
    if (!quiz) return rejectWithValue("no such quiz");
    return {
      id: res.id,
      name: quiz.name,
      category: quiz.category,
      questions: quiz.questions,
      answers: quiz.answers,
    };
  }
);
export const finishQuiz = createAsyncThunk<void, string, { state: RootStore }>(
  "quiz/finishQuiz",
  async (quizID, { rejectWithValue, getState }) => {
    const state = getState();
    const { user } = state.userReducer;
    const { right_answers, answers } = state.quizReducer;
    try {
      if (right_answers === answers?.length) {
        await updateUserQuizzes(user?.id || "", quizID);
      }
    } catch (err) {
      console.error(err);
      return rejectWithValue(err);
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion(state) {
      const index = state.question_index;
      if (state.user_answers[index] == state.answers[index])
        state.right_answers += 1;
      if (state.question_index < state.questions.length)
        state.question_index += 1;
    },
    addUserAnswer(state, action) {
      state.user_answers = [...state.user_answers, action.payload];
    },
    clearQuiz(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuizInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuizInfo.fulfilled, (state, action) => {
        const { name, answers, questions, id } = action.payload;
        state.isLoading = false;
        state.id = id;
        state.name = name;
        state.answers = answers;
        state.questions = questions;
        state.question_index = 0;
        state.user_answers = [];
        state.right_answers = 0;
      })
      .addCase(getQuizInfo.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { nextQuestion, addUserAnswer, clearQuiz } = quizSlice.actions;
export default quizSlice.reducer;
