import { createSlice } from "@reduxjs/toolkit";

type InitialProps = {
  name: string;
  question_index: number;
  user_answers: string[];
};
const initialState: InitialProps = {
  name: "",
  question_index: 0,
  user_answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.question_index += 1;
    },
    setQuizName(state, action) {
      state.name = action.payload;
    },
    addUserAnswer(state, action) {
      state.user_answers = [...state.user_answers, action.payload];
    },
    clearQuiz(state) {
      state.name = "";
      state.question_index = 0;
      state.user_answers = [];
    },
  },
});

export const { nextQuestion, setQuizName, addUserAnswer, clearQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;
