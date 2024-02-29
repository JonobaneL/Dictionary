export type initialStateProps = {
  puzzleID: string | null;
  isLoading: boolean;
  letters: string[];
  words: string[] | null;
  progress: string[];
  puzzleLevel: number;
  wordLetters: number[];
};
export type PuzzleConditions = {
  words: string[];
  letters: string[];
  puzzleID: string;
};
export type CondionsProps = {
  currentID: string | null;
  puzzleID: string | null;
};
