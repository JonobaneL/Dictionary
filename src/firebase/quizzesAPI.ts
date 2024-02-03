import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
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
export const getQuiz = (quizID: string | undefined) => {
  const collectionRef = collection(firestoreDB, "quizzes");
  const docRef = doc(collectionRef, quizID);
  return getDoc(docRef);
};

//finish quiz
export const addQuiz = () => {
  const quiz = {
    name: `Quiz Yourself On Can Vs. Could!`,
    category: "Commonly Confused Words",
    questions: [
      {
        question: "True or False? COULD is the past tense form of CAN.",
        options: ["True", "False"],
      },
      {
        question:
          "Fill in the blank: Cheetahs ______ run faster than lions can.",
        options: ["can", "could"],
      },
      {
        question: "Which form is used for the subjunctive mood?",
        options: ["can", "could"],
      },
      {
        question: "When asking for permission, which is more formal?",
        options: ["can", "could"],
      },
      {
        question:
          "Fill in the blank: Do you think Batman ________ beat Superman in basketball if they were real?",
        options: ["can", "could"],
      },
      {
        question:
          "Which of the following auxiliary verbs have similar conjugations to CAN?",
        options: ["will", "shall", "all the of above"],
      },
    ],
    answers: ["true", "can", "could", "could", "could", "all the of above"],
  };
  const collectionRef = collection(firestoreDB, "quizzes");
  return addDoc(collectionRef, quiz);
};
