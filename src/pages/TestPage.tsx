import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import Button from "../components/UI/Button";

import { nav } from "../data/navbarMenu";
import { IconContext } from "react-icons";
import ActiveNavCircle from "../components/UI/ActiveNavCircle";
import {
  addQuiz,
  getQuizzes,
  getQuizzes1,
  getQuizzes2,
} from "../firebase/quizzesAPI";
import { useAsync } from "../hooks/useAsync";
import { QuestionType, QuizType } from "../models/QuizTypes";
import QuizzesList from "../components/QuizzesList";
import Loader from "../components/UI/Loader";
import { FirestoreDocType } from "../firebase/userAPI";
import { useQuizzes } from "../hooks/useLimitQuery";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useEventListener } from "../hooks/useEventListener";
import { EventType } from "firebase/database";

// type NavProps
// const NavLink = ({}:NavProps)=>{

// }

//const [isLoading,_,quizzes] = useAsync(getQuizzes,[],'firebase');
//const [quizzesList,setQuizzesList] = useState(quizzes)
type QuizRes = {
  name: string;
  category: string;
  questions: QuestionType[];
  answers: string[];
};
const TestPage = () => {
  const [limit, setLimit] = useState(5);
  const [category, setCategory] = useState<string | null>(null);

  // const [isLoading, _, quizzes] = useQuizzes(null, limit);
  // const [isLoading, _, quizzes] = useAsync<QuizType[]>(
  //   () => getQuizzes2(category, limit),
  //   [limit, category],
  //   "firebase"
  // );
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [lastDoc, setLastDoc] = useState<FirestoreDocType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const limitStep = 5;
  const changeCategory = (c: string | null) => {
    setCategory(c);
    setLimit(5);
    setLastDoc(null);
    setQuizzes([]);
  };

  const fetchQuizzes = async () => {
    setIsLoading(true);
    const response = await getQuizzes2(category, limitStep, lastDoc);
    setLastDoc(response.docs[response.docs.length - 1]);
    const list: QuizType[] = [];
    response.forEach((item: FirestoreDocType) => {
      const i: any = item.data();
      const quiz: QuizType = Object.assign({ id: item.id }, i);
      list.push(quiz);
    });
    setQuizzes((p) => [...p, ...list]);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchQuizzes();
  }, [limit, category]);
  // useEventListener("click", (e) => handler(e));
  return (
    <div className={styles["test-page"]}>
      <h1>Lorem ipsum</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque
        numquam obcaecati molestias. Autem fugiat iure perspiciatis, voluptate
        atque reiciendis recusandae voluptas laboriosam, aut porro molestias eum
        quos vel quaerat.
      </p>
      <br />
      <br />

      {/* <h3>{quizzes?.length}</h3> */}
      <br />
      <QuizzesList isLoading={isLoading} quizzes={quizzes} />
      {isLoading && <Loader type="small" />}
      <br />
      {quizzes?.length == limit && (
        <button onClick={() => setLimit((p) => p + 5)}>Change Limit</button>
      )}
      <br />
      <button onClick={() => changeCategory("Food & Drink")}>Food</button>
      <br />
      <button onClick={() => changeCategory("Literature")}>Literature</button>
      <br />
      <button onClick={() => changeCategory(null)}>Show All</button>
      <br />
    </div>
  );
};

export default TestPage;
