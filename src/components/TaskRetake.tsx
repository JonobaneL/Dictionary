import styles from "../assets/styles/components/PuzzleRetake.module.scss";
import { HiMiniArrowPath } from "react-icons/hi2";
import { retakePhrase } from "../utils/retakePhrase";

type RetakeProps = {
  progress: number;
  maxValue: number;
  callback: () => void;
  type: "quiz" | "puzzle";
};

const TaskRetake = ({ progress, maxValue, callback, type }: RetakeProps) => {
  const phrase = retakePhrase(progress, maxValue, type);

  const retakeHandler = () => {
    callback();
  };
  return (
    <div className={styles.retake}>
      <p className={styles.phrase}>{phrase}</p>
      {progress < maxValue && (
        <button className={styles.btn} onClick={retakeHandler}>
          <p>Retake</p>
          <HiMiniArrowPath size="1.5rem" color="#3f707d" />
        </button>
      )}
    </div>
  );
};

export default TaskRetake;
