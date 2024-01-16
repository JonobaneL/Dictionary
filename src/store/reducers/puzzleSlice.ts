import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPuzzleConditions } from "../../firebase/puzzleAPI";

type initialStateProps = {
  isLoading: boolean;
  letters: string[];
  words: string[] | null;
  progress: string[];
  puzzleLevel: number;
  wordLetters: number[];
};
type PuzzleConditions = {
  words: string[];
  letters: string[];
};
const initialState: initialStateProps = {
  isLoading: false,
  letters: [],
  words: null,
  progress: [],
  puzzleLevel: 0,
  wordLetters: [],
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
      state.progress = [...state.progress, action.payload];
    },
    addWordLetter(state, action) {
      const letter = action.payload;
      const check = state.wordLetters.find((item) => item == letter);
      state.wordLetters = [...state.wordLetters, letter];
      if (check != undefined) {
        state.wordLetters = state.wordLetters.filter((item) => item !== letter);
      }
    },
    removeWordLetter(state) {
      state.wordLetters = state.wordLetters.slice(0, -1);
    },
    shuffleLetters(state) {
      const shuffled = state.letters
        ?.map((value) => ({ value, sort: Math.random() }))
        ?.sort((a, b) => a.sort - b.sort)
        ?.map(({ value }) => value);
      state.letters = shuffled || null;
    },
    checkPuzzleWord(state, action) {
      const word = action.payload;
      const wordExist = state.words?.find((item) => item == word);
      const progressExist = state.progress.find((item) => item == word);
      if (wordExist && !progressExist) {
        state.progress = [...state.progress, action.payload];
      }
      state.wordLetters = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPuzzleConditions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setPuzzleConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        const { words, letters } = action.payload;
        state.letters = letters;
        state.words = words;
        const level = words ? Math.floor(words.length / 2) : 0;
        state.puzzleLevel = level > 30 ? 30 : level;
      });
  },
});
export const {
  setPuzzle,
  setPuzzleProgress,
  addWordLetter,
  removeWordLetter,
  shuffleLetters,
  checkPuzzleWord,
} = puzzleSlice.actions;

export default puzzleSlice.reducer;
