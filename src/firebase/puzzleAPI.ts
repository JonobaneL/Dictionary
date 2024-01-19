import { firestoreDB } from ".";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getPuzzleConditions = (puzzleID: string) => {
  //change method to choose random puzzle from db
  const puzzleRef = doc(firestoreDB, "puzzles", puzzleID);
  return getDoc(puzzleRef);
};
export const getAllPuzzles = () => {
  const collectionRef = collection(firestoreDB, "puzzles");
  return getDocs(collectionRef);
};
