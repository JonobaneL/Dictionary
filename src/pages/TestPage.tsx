import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import Button from "../components/UI/Button";

import { nav } from "../data/navbarMenu";
import { IconContext } from "react-icons";
import ActiveNavCircle from "../components/UI/ActiveNavCircle";
import { useAsync } from "../hooks/useAsync";
import { QuestionType, QuizType } from "../models/QuizTypes";
import QuizzesList from "../components/QuizzesList";
import Loader from "../components/UI/Loader";
import { FirestoreDocType } from "../firebase/userAPI";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { fetchQuizzes, setLimit } from "../store/reducers/QuizzesSlice";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rate from "../components/UI/Rate";
import { finishQuiz } from "../store/reducers/QuizSlice";
import { finishPuzzle } from "../store/reducers/puzzleSlice";
import FullPageModal from "../components/UI/FullPageModal";
import QuizResults from "../components/QuizResults.tsx";

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
  const [rate, setRate] = useState(0);
  const dispatch = useTypeDispatch();
  // useEventListener("click", (e) => handler(e));
  const quizHandler = () => {
    dispatch(finishQuiz("someID"));
  };
  const puzzleHandler = () => {
    dispatch(finishPuzzle("someID"));
  };
  const [isOpen, setIsOpen] = useState(false);
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
      <Button mode="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <br />
      <FullPageModal status={isOpen}>
        <Button mode="primary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
        <QuizResults />
      </FullPageModal>
    </div>
  );
};

export default TestPage;
