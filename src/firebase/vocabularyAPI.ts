import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from ".";

export const getCategoryVocabulary = (
  category: string | null,
  partOfSpeech: string | null
) => {
  const levels = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const refs = levels.map((item) => {
    const collectionRef = collection(firestoreDB, `words_${item}`);
    const queryRef = query(collectionRef, where("category", "==", category));
    if (partOfSpeech) {
      const newQuery = query(
        queryRef,
        where("partOfSpeech", "==", partOfSpeech)
      );
      return getDocs(newQuery);
    }
    return getDocs(queryRef);
  });
  return Promise.all(refs);
};

export const getLevelVocabulary = (
  level: string | null,
  part: string | null
) => {
  const collectionRef = collection(firestoreDB, `words_${level}`);
  if (part) {
    const queryRef = query(collectionRef, where("partOfSpeech", "==", part));
    return getDocs(queryRef);
  }
  return getDocs(collectionRef);
};
