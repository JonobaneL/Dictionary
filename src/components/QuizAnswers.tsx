import styles from "../assets/styles/components/QuizAnswers.module.scss";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

const QuizAnswers = () => {
  const { questions, user_answers, answers } = useTypeSelector(
    (state) => state.quizReducer
  );
  return (
    <div className={styles["quiz-answers"]}>
      <ul className={styles.questions}>
        {answers.map((item, index) => (
          <li key={index}>
            <p className={styles.question}>
              {index + 1}. {questions[index].question}
            </p>
            <div className={styles.answers}>
              {user_answers[index] != item && (
                <p className={styles["correct-answer"]}>
                  <span className={styles.head}>Correct Answer:</span> {item}
                </p>
              )}
              <p className={styles["user-answer"]}>
                <span className={styles.head}>Your Answer:</span>{" "}
                {user_answers[index]}
              </p>
              <div className={styles.icon}>
                {user_answers[index] != item ? (
                  <IoMdCloseCircleOutline size="2rem" color="#b11a21" />
                ) : (
                  <FaRegCheckCircle size="1.7rem" color="#54a68d" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizAnswers;
