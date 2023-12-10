import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestoreDB } from ".";

type UserProps = {
  uid: string;
  name: string;
  email: string;
};

export const addNewUser = (user: UserProps) => {
  return setDoc(doc(firestoreDB, "users", user.uid), user);
};

export const getUserInfo = (uid: string) => {
  const userRef = doc(firestoreDB, "users", uid);
  return getDoc(userRef);
};

export type FirestoreDocType = Awaited<ReturnType<typeof getDoc>>;
