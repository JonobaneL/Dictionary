import { doc, setDoc } from "firebase/firestore";
import { firesoreDB } from ".";

type UserProps = {
  uid: string;
  name: string;
  email: string;
};

export const addNewUser = (user: UserProps) => {
  return setDoc(doc(firesoreDB, "users", user.uid), user);
};
