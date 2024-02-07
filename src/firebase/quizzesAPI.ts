import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { firestoreDB } from ".";

export const getQuizzesCategories = () => {
  const collectionRef = collection(firestoreDB, "quiz_categories");
  return getDocs(collectionRef);
};
export const getQuizzes = (category: string | null) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  if (category == null) {
    return getDocs(collectionRef);
  }
  const quizzesRef = query(collectionRef, where("category", "==", category));
  return getDocs(quizzesRef);
};

export const getQuizzes1 = (category: string | null, itemsLimit: number) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  if (category == null) {
    const queryRef = query(collectionRef, limit(itemsLimit));
    return getDocs(queryRef);
  }
  const quizzesRef = query(
    collectionRef,
    where("category", "==", category),
    limit(itemsLimit)
  );
  return getDocs(quizzesRef);
};
export const getQuiz = (quizID: string | undefined) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  const docRef = doc(collectionRef, quizID);
  return getDoc(docRef);
};

//finish quiz
export const addQuiz = () => {
  const quiz = {
    name: ``,
    category: "",
    questions: [
      {
        question: "",
        options: ["", "", ""],
      },
    ],
    answers: [""],
  };
  const collectionRef = collection(firestoreDB, "quizzes");
  return addDoc(collectionRef, quiz);
};
