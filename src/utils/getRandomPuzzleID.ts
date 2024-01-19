import { getAllPuzzles } from "../firebase/puzzleAPI";

export const getRandomPuzzleID = async (puzzleID: string | undefined) => {
  //add 2 condition like currentPuzzleID and id of puzzle that already completed
  if (puzzleID) return puzzleID;
  try {
    const res = await getAllPuzzles();
    if (res.size > 0) {
      const randomID = Math.floor(Math.random() * res.size);
      return res.docs[randomID].id;
    }
  } catch (err) {
    console.log(err);
  }
  return "";
};
