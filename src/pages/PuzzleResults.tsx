import styles from "../assets/styles/pages/PuzzleRules.module.scss";
import logo from "../assets/images/logo.svg";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

const PuzzleResults = () => {
  const { progress, puzzleLevel } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  console.log(progress);
  return (
    <div className={styles["puzzle-results"]}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h2 className={styles.title}>Your Results</h2>

      <div className={styles["progress-wrapper"]}>
        <div className={styles.progress}>
          {progress.length}/{puzzleLevel}
        </div>
      </div>
    </div>
  );
};

export default PuzzleResults;
