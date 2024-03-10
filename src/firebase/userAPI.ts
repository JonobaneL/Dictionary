import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, firestoreDB } from ".";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";

type UserProps = {
  name: string;
  email: string;
};

export const addNewUser = (user: UserProps, uid: string) => {
  return setDoc(doc(firestoreDB, "users", uid), {
    ...user,
    puzzles: [],
    quizzes: [],
    words: [],
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
export const resetUserPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};
export const updateNickname = (userID: string | null, nickname: string) => {
  const userRef = doc(firestoreDB, "users", userID || "");
  return updateDoc(userRef, {
    name: nickname,
  });
};
export const updateUserEmail = (email: string) => {
  if (auth.currentUser) {
    return updateEmail(auth.currentUser, email);
  }
};
// console.log(auth.currentUser);
export const updateUserPassword = (newPassword: string) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, newPassword);
  }
};
export const reauthenticateUser = (oldPassword: string) => {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(
    user?.email || "",
    oldPassword
  );
  if (user) return reauthenticateWithCredential(user, credential);
};
export const emailVerification = () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser);
  }
};

export type FirestoreDocType = Awaited<ReturnType<typeof getDoc>>;
