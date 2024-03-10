import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  startAfter,
} from "firebase/firestore";
import { firestoreDB } from ".";
import { FirestoreDocType } from "./userAPI";

export const getQuizzesCategories = () => {
  const collectionRef = collection(firestoreDB, "quiz_categories");
  return getDocs(collectionRef);
};

export const generateQuizzesQuery = (category: string | null) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  if (category == null) {
    return collectionRef;
  }
  const quizzesRef = query(collectionRef, where("category", "==", category));
  return quizzesRef;
};

export const getQuizzes = (
  category: string | null,
  itemsLimit: number,
  lastDoc: FirestoreDocType | null
) => {
  const quizzesRef = generateQuizzesQuery(category);
  const queryRef = query(quizzesRef, limit(itemsLimit));

  if (!lastDoc?.id) {
    return getDocs(queryRef);
  }
  const startAfterQuery = query(
    queryRef,
    startAfter(lastDoc),
    limit(itemsLimit)
  );
  return getDocs(startAfterQuery);
};
export const getQuiz = (quizID: string | undefined) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  const docRef = doc(collectionRef, quizID);
  return getDoc(docRef);
};
