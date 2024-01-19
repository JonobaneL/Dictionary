import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPuzzleConditions } from "../../firebase/puzzleAPI";
import { getRandomPuzzleID } from "../../utils/getRandomPuzzleID";

type initialStateProps = {
  puzzleID: string | null;
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
  puzzleID: string;
};
const initialState: initialStateProps = {
  puzzleID: null,
  isLoading: false,
  letters: [],
  words: null,
  progress: [],
  puzzleLevel: 0,
  wordLetters: [],
};
//also we have to put data in local storage
export const setPuzzleConditions = createAsyncThunk<
  PuzzleConditions,
  string | undefined
>("puzzle/getConditions", async (puzzleID, { rejectWithValue }) => {
  const rand = await getRandomPuzzleID(puzzleID);
  const res = await getPuzzleConditions(rand);
  const condions = res.data();
  if (!condions) return rejectWithValue("no such puzzle");
  return {
    words: condions.words,
    letters: condions.letters,
    puzzleID: res.id,
  };
});

const puzzleSlice = createSlice({
  name: "wordPuzzle",
  initialState: initialState,
  reducers: {
    setPuzzle(state, action) {
      state.letters = action.payload.letters;
      state.words = action.payload.words;
    },
    clearPuzzleProgress(state) {
      state.progress = [];
      state.wordLetters = [];
    },
    addWordLetter(state, action) {
      const letter = action.payload;
      const check = state.wordLetters.includes(letter);
      state.wordLetters = [...state.wordLetters, letter];
      if (check) {
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
      const wordExist = state.words?.includes(word);
      const progressExist = state.progress.includes(word);
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
        const { words, letters, puzzleID } = action.payload;
        state.isLoading = false;
        state.letters = letters;
        state.words = words;
        state.puzzleID = puzzleID;
        const level = words ? Math.floor(words.length / 2) : 0;
        state.puzzleLevel = level > 30 ? 30 : level;
      })
      .addCase(setPuzzleConditions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const {
  setPuzzle,
  clearPuzzleProgress,
  addWordLetter,
  removeWordLetter,
  shuffleLetters,
  checkPuzzleWord,
} = puzzleSlice.actions;

export default puzzleSlice.reducer;
