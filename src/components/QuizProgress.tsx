import styles from "../assets/styles/components/QuizProgress.module.scss";
import ProgressIndicator from "./UI/ProgressIndicator";

type ProgressProps = {
  size: number;
};

const QuizProgress = ({ size }: ProgressProps) => {
  return (
    <div>
      <ul className={styles.progress}>
        {[...Array(size)].map((_, index) => (
          <ProgressIndicator key={index} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default QuizProgress;
