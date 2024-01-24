import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from ".";

export const getQuizzesCategories = () => {
  const collectionRef = collection(firestoreDB, "quiz_categories");
  return getDocs(collectionRef);
};
