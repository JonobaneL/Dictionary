import styles from "../assets/styles/components/QuizProgress.module.scss";
import ProgressIndicator from "./UI/ProgressIndicator";

type ProgressProps = {
  size: number;
  answers: string[];
};

const QuizProgress = ({ size, answers }: ProgressProps) => {
  return (
    <div>
      <ul className={styles.progress}>
        {[...Array(size)].map((_, index) => (
          <ProgressIndicator key={index} index={index} answers={answers} />
        ))}
      </ul>
    </div>
  );
};

export default QuizProgress;
