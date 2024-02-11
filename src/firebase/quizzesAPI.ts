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
  startAfter,
} from "firebase/firestore";
import { firestoreDB } from ".";
import { FirestoreDocType } from "./userAPI";

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
const generateQuizzesQuery = (category: string | null) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  if (category == null) {
    return collectionRef;
  }
  const quizzesRef = query(collectionRef, where("category", "==", category));
  return quizzesRef;
};
export const getQuizzes1 = (
  category: string | null,
  itemsLimit: number,
  lastDoc: FirestoreDocType | null
) => {
  const quizzesRef = generateQuizzesQuery(category);
  const queryRef = query(quizzesRef, limit(itemsLimit));
  console.log(lastDoc?.id);

  if (!lastDoc?.id) {
    console.log("fetch function");
    return getDocs(queryRef);
  }
  // console.log(category);
  const startAfterQuery = query(
    queryRef,
    startAfter(lastDoc),
    limit(itemsLimit)
  );
  return getDocs(startAfterQuery);
};
export const getQuizzes2 = (
  category: string | null,
  itemsLimit: number,
  lastDoc: FirestoreDocType | null
) => {
  const quizzesRef = generateQuizzesQuery(category);
  const queryRef = query(quizzesRef, limit(itemsLimit));
  console.log(lastDoc);

  if (!lastDoc?.id) {
    return getDocs(queryRef);
  }
  console.log("continue");
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
