import { useState } from "react";
import styles from "../assets/styles/components/QuizQuestions.module.scss";
import { QuestionType } from "../models/QuizTypes";
import { AnimatePresence, motion } from "framer-motion";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

type QuestionsProps = {
  questions: QuestionType[];
};

const QuizQuestions = ({ questions }: QuestionsProps) => {
  const { question_index } = useTypeSelector((state) => state.quizReducer);
  return (
    <div className={styles["quiz-questions"]}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={question_index}
          className={styles.question}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          transition={{ duration: 0.2 }}
        >
          <h4>{questions[question_index].question}</h4>
          <ul className={styles.options}>
            {questions[question_index].options.map((option, optionIndex) => (
              <li className={styles.option} key={optionIndex}>
                {option}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizQuestions;
