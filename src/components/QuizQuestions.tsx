import styles from "../assets/styles/components/QuizQuestions.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import QuestionOption from "./QuestionOption";

const QuizQuestions = () => {
  const { question_index, questions } = useTypeSelector(
    (state) => state.quizReducer
  );
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
          <h4>{questions[question_index]?.question}</h4>
          <ul className={styles.options}>
            {questions[question_index]?.options.map((option, optionIndex) => (
              <QuestionOption key={optionIndex} option={option} />
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizQuestions;
