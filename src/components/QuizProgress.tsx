import styles from "../assets/styles/components/QuizProgress.module.scss";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

type ProgressProps = {
  size: number;
  answers?: string[];
};

const QuizProgress = ({ size, answers }: ProgressProps) => {
  const { question_index } = useTypeSelector((state) => state.quizReducer);

  return (
    <div>
      <ul className={styles.progress}>
        {[...Array(size)].map((_, index) => (
          <li
            className={`${styles.indicator} ${
              question_index == index ? styles.active : ""
            }`}
            key={index}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default QuizProgress;
