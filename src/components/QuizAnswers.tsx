import styles from "../assets/styles/components/QuizAnswers.module.scss";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

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
            {user_answers[index] != item && (
              <p className={styles.answer}>
                <span className={styles.head}>Correct Answer:</span> {item}
              </p>
            )}
            <p className={styles.answer}>
              <span className={styles.head}>Your Answer:</span>{" "}
              {user_answers[index]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizAnswers;
