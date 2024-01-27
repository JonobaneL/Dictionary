import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import { categories } from "../data/categories";
import Button from "../components/UI/Button";

import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";
import ProgressBar from "../components/UI/ProgressBar";
import Notification from "../components/UI/Notification";
import { getAllPuzzles } from "../firebase/puzzleAPI";
import CircleProgress from "../components/UI/CircleProgress";
import ModalWindow from "../components/UI/ModalWindow";
import { addQuiz } from "../firebase/quizzesAPI";

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // const handler = async () => {
    //   const res = await addQuiz();
    // };
    // handler();
  }, []);
  // console.log(quiz);
  return (
    <div className={styles["test-page"]}>
      <h1 onClick={() => setIsOpen(true)}>Lorem ipsum</h1>
      <ModalWindow status={isOpen} onChange={setIsOpen} title="Categories">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae
          quos dolores unde velit nihil sint iste excepturi, ullam qui.
        </p>
      </ModalWindow>
    </div>
  );
};

export default TestPage;
