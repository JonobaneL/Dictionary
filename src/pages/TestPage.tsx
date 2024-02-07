import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import Button from "../components/UI/Button";

import { nav } from "../data/navbarMenu";
import { IconContext } from "react-icons";
import ActiveNavCircle from "../components/UI/ActiveNavCircle";
import { addQuiz, getQuizzes, getQuizzes1 } from "../firebase/quizzesAPI";
import { useAsync } from "../hooks/useAsync";
import { QuestionType, QuizType } from "../models/QuizTypes";
import QuizzesList from "../components/QuizzesList";
import { useLimitQuery } from "../hooks/useLimitQuery";
import Loader from "../components/UI/Loader";
import { FirestoreDocType } from "../firebase/userAPI";

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
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [begin, setBegin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const category = null;
  // const [isLoading, _, quizzes] = useLimitQuery<QuizType>(
  //   () => getQuizzes1(category, limit),
  //   [category, limit]
  // );
  useEffect(() => {
    const fetchQuizzes = async () => {
      setIsLoading(true);
      const res = await getQuizzes1(category, limit);
      const list: QuizType[] = [];
      res.forEach((item: FirestoreDocType) => {
        const i: any = item.data();
        const quiz: QuizType = Object.assign({ id: item.id }, i);
        console.log(quiz);
        list.push(quiz);
      });
      setQuizzes((p) => [...p, ...list]);
      setIsLoading(false);
    };
    fetchQuizzes();
  }, [limit]);
  console.log(quizzes);
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
      <h3>{quizzes?.length}</h3>
      <br />
      <QuizzesList isLoading={isLoading} quizzes={quizzes} />
      {isLoading && <Loader type="small" />}
      <br />
      <button onClick={() => setLimit((p) => p + 5)}>Change Limit</button>
    </div>
  );
};

export default TestPage;
