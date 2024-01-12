import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  letters: string[] | null;
  words: string[] | null;
  progress: string[] | null;
};
const initialState: initialStateProps = {
  letters: null,
  words: null,
  progress: null,
};

const puzzleSlice = createSlice({
  name: "wordPuzzle",
  initialState: initialState,
  reducers: {
    setPuzzle(state, action) {
      state.letters = action.payload.letters;
      state.words = action.payload.words;
      state.progress = action.payload.progress;
    },
  },
});
export const { setPuzzle } = puzzleSlice.actions;
