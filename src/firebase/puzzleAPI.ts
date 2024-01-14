import { firestoreDB } from ".";
import { doc, getDoc } from "firebase/firestore";

export const getPuzzleConditions = () => {
  //change method to choose random puzzle from db
  const puzzleRef = doc(firestoreDB, "puzzles", "sKoHAQtCAhFLwgo9VHCc");
  return getDoc(puzzleRef);
};
