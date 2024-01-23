import { getAllPuzzles } from "../firebase/puzzleAPI";

const generatePuzzleIndex = (
  puzzles: string[],
  puzzleID: string | null,
  completedPuzzles: string[] | null
) => {
  let id = Math.floor(Math.random() * puzzles.length);
  while (puzzleID === puzzles[id]) {
    id = Math.floor(Math.random() * puzzles.length);
  }
  return puzzles[id];
};

export const getRandomPuzzleID = async (
  currentID: string | undefined,
  puzzleID: string | null
) => {
  //add 2 condition like currentPuzzleID and id of puzzle that already completed
  if (currentID) return currentID;
  try {
    const res = await getAllPuzzles();
    if (res.size > 0) {
      let puzzles: string[] = [];
      res.forEach((item) => puzzles.push(item.id));
      const randomID = generatePuzzleIndex(puzzles, puzzleID, null);
      return randomID;
    }
  } catch (err) {
    console.log(err);
  }
  return "";
};
