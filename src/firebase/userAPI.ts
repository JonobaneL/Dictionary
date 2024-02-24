import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestoreDB } from ".";

type UserProps = {
  name: string;
  email: string;
};

export const addNewUser = (user: UserProps, uid: string) => {
  return setDoc(doc(firestoreDB, "users", uid), {
    ...user,
    puzzles: [],
    quizzes: [],
  });
};

export const getUserInfo = (uid: string | null) => {
  const userRef = doc(firestoreDB, "users", uid || "");
  return getDoc(userRef);
};

export const addFeedback = (
  email: string | null,
  message: string,
  rate: number
) => {
  const feedbackRef = collection(firestoreDB, "feedbacks");
  return addDoc(feedbackRef, {
    user: email,
    message,
    rate,
  });
};
export const updateUserQuizzes = (userID: string | null, quizID: string) => {
  const userRef = doc(firestoreDB, "users", userID || "");
  return updateDoc(userRef, {
    quizzes: arrayUnion(quizID),
  });
};
export const updateUserPuzzles = (userID: string | null, puzzleID: string) => {
  const userRef = doc(firestoreDB, "users", userID || "");
  return updateDoc(userRef, {
    puzzles: arrayUnion(puzzleID),
  });
};

export type FirestoreDocType = Awaited<ReturnType<typeof getDoc>>;
