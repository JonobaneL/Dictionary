import styles from "../assets/styles/components/PuzzleProgress.module.scss";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import ProgressBar from "./UI/ProgressBar";

const PuzzleProgress = () => {
  const { progress, words, puzzleLevel } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  return (
    <div className={styles.progress}>
      <h4>
        {progress?.length}/{puzzleLevel}
      </h4>
      <ProgressBar maxValue={words?.length || 0} progress={progress.length} />
    </div>
  );
};

export default PuzzleProgress;
