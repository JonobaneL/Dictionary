import { firestoreDB } from ".";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getPuzzleConditions = (puzzleID: string) => {
  const puzzleRef = doc(firestoreDB, "puzzles", puzzleID);
  return getDoc(puzzleRef);
};
export const getAllPuzzles = () => {
  const collectionRef = collection(firestoreDB, "puzzles");
  return getDocs(collectionRef);
};
