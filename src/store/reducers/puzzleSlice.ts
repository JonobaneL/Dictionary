import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPuzzleConditions } from "../../firebase/puzzleAPI";

type initialStateProps = {
  isLoading: boolean;
  letters: string[] | null;
  words: string[] | null;
  progress: string[];
  wordLetters: number[] | null;
};
type PuzzleConditions = {
  words: string[];
  letters: string[];
};
const initialState: initialStateProps = {
  isLoading: false,
  letters: null,
  words: null,
  progress: [],
  wordLetters: null,
};

export const setPuzzleConditions = createAsyncThunk<
  PuzzleConditions,
  undefined
>("puzzle/getConditions", async (_, { rejectWithValue }) => {
  const res = await getPuzzleConditions();
  const condions = res.data();
  if (!condions) return rejectWithValue("no such puzzle");
  return { words: condions.words, letters: condions.letters };
});

const puzzleSlice = createSlice({
  name: "wordPuzzle",
  initialState: initialState,
  reducers: {
    setPuzzle(state, action) {
      state.letters = action.payload.letters;
      state.words = action.payload.words;
    },
    setPuzzleProgress(state, action) {
      state.progress = state.progress
        ? [...state.progress, action.payload]
        : [action.payload];
    },
    setWordLetters(state, action) {
      state.wordLetters = state.wordLetters
        ? [...state.wordLetters, action.payload]
        : [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPuzzleConditions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setPuzzleConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload.letters;
        state.words = action.payload.words;
      });
  },
});
export const { setPuzzle, setPuzzleProgress, setWordLetters } =
  puzzleSlice.actions;

export default puzzleSlice.reducer;
