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
  // const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  // const [quizzes1, setQuizzes1] = useState<FirestoreDocType[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const category = null;
  // // const [isLoading, _, quizzes] = useLimitQuery<QuizType>(
  // //   () => getQuizzes1(category, limit),
  // //   [category, limit]
  // // );
  // useEffect(() => {
  //   const fetchQuizzes = async () => {
  //     setIsLoading(true);
  //     const res = await getQuizzes1(category, limit, quizzes1);
  //     setQuizzes1((p) => [...p, ...res.docs]);
  //     setIsLoading(false);
  //   };
  //   fetchQuizzes();
  // }, [limit]);
  // useEffect(() => {
  //   const list: QuizType[] = [];
  //   quizzes1.forEach((item: FirestoreDocType) => {
  //     const i: any = item.data();
  //     const quiz: QuizType = Object.assign({ id: item.id }, i);
  //     console.log(quiz);
  //     list.push(quiz);
  //   });
  //   setQuizzes(list);
  //   // console.log(quizzes1.length);
  // }, [quizzes1]);
  // const [isLoading, _, quizzes] = useQuizzes(null, limit);
  const [isOpen, setIsOpen] = useState(true);
  const words = [
    "word1",
    "word2",
    "word3",
    "word4",
    "word5",
    "word6",
    "word7",
    "word8",
    "word9",
    "word10",
    "word11",
    "word12",
    "word13",
    "word14",
  ];

  const serchRef = useRef(null);
  const fieldRef = useRef(null);
  console.log(serchRef);
  const handler = (e: Event) => {
    // fieldRef.current?.contains(e.target)
    console.log(e.target);
    if (fieldRef.current?.contains(e.target) && isOpen == false) {
      // setIsOpen(false);
      console.log("open");
    }
    if (!serchRef.current?.contains(e.target) && isOpen == true) {
      // setIsOpen(false);
      console.log("close");
    }
  };
  useEventListener("click", (e) => handler(e));
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
      <div className={styles["dashboard-search"]}>
        <h3>Journey Through Language: Find, Understand, and Learn</h3>
        <motion.div
          className={styles.search}
          // onBlur={() => setIsOpen(false)}
        >
          <motion.div
            ref={fieldRef}
            id="field"
            className={styles["search-field"]}
          >
            <input type="text" onFocus={() => setIsOpen(true)} />
            <HiMiniMagnifyingGlass color="#3f707d" size="100%" />
          </motion.div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div ref={serchRef} className={styles["search-results"]}>
                <ul className={styles.list} onClick={(e) => console}>
                  {words.map((item, index) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(item);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* <h3>{quizzes?.length}</h3> */}
      <br />
      {/* <QuizzesList isLoading={isLoading} quizzes={quizzes} />
      {isLoading && <Loader type="small" />}
      <br />
      {quizzes.length == limit && (
        <button onClick={() => setLimit((p) => p + 5)}>Change Limit</button>
      )} */}
    </div>
  );
};

export default TestPage;
