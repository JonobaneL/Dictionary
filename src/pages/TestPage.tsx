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
import {
  FirestoreDocType,
  emailVerification,
  resetUserPassword,
} from "../firebase/userAPI";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rate from "../components/UI/Rate";
import { finishQuiz } from "../store/reducers/QuizSlice";
import { finishPuzzle } from "../store/reducers/puzzleSlice";
import FullPageModal from "../components/UI/FullPageModal";
import QuizResults from "../components/QuizResults.tsx";
import Field from "../components/UI/Field.tsx";
import { IoMdKey } from "react-icons/io";
import { useEventListener } from "../hooks/useEventListener.ts";
import UserSettings from "../components/UserSettings.tsx";
import ModalWindow from "../components/UI/ModalWindow.tsx";
import { getCategoryVocabulary } from "../firebase/vocabularyAPI.ts";

const TestPage = () => {
  // useEventListener("click", (e) => handler(e));
  //email has to pass verification
  const [modalStatus, setStatus] = useState(false);

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
      <Button mode="secondary" onClick={() => console.log("click")}>
        verify
      </Button>
      <br />
    </div>
  );
};

export default TestPage;
