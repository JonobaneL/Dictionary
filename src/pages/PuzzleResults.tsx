import styles from "../assets/styles/pages/PuzzleResults.module.scss";
import logo from "../assets/images/logo.svg";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import Button from "../components/UI/Button";
import { HiMiniArrowPath } from "react-icons/hi2";
import { puzzlePhrase } from "../utils/puzzlePhrase";
import Accordion from "../components/UI/Accordion";
import WordsList from "../components/UI/WordsList";
import { useNavigate } from "react-router-dom";
import { clearPuzzleProgress } from "../store/reducers/puzzleSlice";

const PuzzleResults = () => {
  const { progress, puzzleLevel, words } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const phrase = puzzlePhrase(progress, puzzleLevel);
  const navigate = useNavigate();
  const dispatch = useTypeDispatch();
  //split component
  const retakeHandler = () => {
    dispatch(clearPuzzleProgress());
    navigate("/word-puzzle");
  };
  return (
    <div className={styles["puzzle-results"]}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h2 className={styles.title}>Your Results</h2>

      <div className={styles["progress-wrapper"]}>
        <div className={styles.progress}>
          {progress.length}/{puzzleLevel}
        </div>
      </div>
      <div className={styles.retake}>
        <p className={styles.phrase}>{phrase}</p>
        <button className={styles.btn} onClick={retakeHandler}>
          <p>Retake</p>
          <HiMiniArrowPath size="1.5rem" color="#3f707d" />
        </button>
      </div>
      <Accordion
        header={
          <div className={styles.answers}>Show Answers ({words?.length})</div>
        }
      >
        <WordsList words={words} />
      </Accordion>

      <div className={styles["new-game"]}>
        <Button mode="primary">Play New Game</Button>
      </div>
    </div>
  );
};

export default PuzzleResults;
