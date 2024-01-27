import styles from "../assets/styles/pages/PuzzleResults.module.scss";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import Button from "../components/UI/Button";
import Accordion from "../components/UI/Accordion";
import WordsList from "../components/UI/WordsList";
import { useNavigate } from "react-router-dom";
import { clearPuzzleProgress } from "../store/reducers/puzzleSlice";
import PuzzleRetake from "../components/PuzzleRetake";
import Logo from "../components/UI/Logo";
import CircleProgress from "../components/UI/CircleProgress";

const PuzzleResults = () => {
  const { progress, puzzleLevel, words, puzzleID } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const navigate = useNavigate();
  const dispatch = useTypeDispatch();

  const gameHandler = () => {
    dispatch(clearPuzzleProgress());
    navigate("/word-puzzle", { state: undefined });
  };
  return (
    <div className={styles["puzzle-results"]}>
      <Logo />
      <h2 className={styles.title}>Your Results</h2>

      <div className={styles["progress-wrapper"]}>
        <CircleProgress
          width="40%"
          maxValue={puzzleLevel}
          progress={progress.length}
        />
      </div>
      <PuzzleRetake
        puzzleID={puzzleID}
        progress={progress}
        puzzleLevel={puzzleLevel}
      />
      <Accordion
        header={
          <div className={styles.answers}>Show Answers ({words?.length})</div>
        }
      >
        <WordsList words={words} />
      </Accordion>

      <div className={styles["new-game"]}>
        <Button mode="secondary" onClick={gameHandler}>
          Play New Game
        </Button>
      </div>
    </div>
  );
};

export default PuzzleResults;
