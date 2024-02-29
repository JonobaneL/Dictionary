import styles from "../assets/styles/pages/PuzzleResults.module.scss";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import Button from "../components/UI/Button";
import Accordion from "../components/UI/Accordion";
import WordsList from "../components/UI/WordsList";
import { clearPuzzleProgress } from "../store/reducers/puzzleSlice";
import TaskRetake from "../components/TaskRetake";
import Logo from "../components/UI/Logo";
import CircleProgress from "../components/UI/CircleProgress";

type ResultsProps = {
  setResults: React.Dispatch<React.SetStateAction<boolean>>;
  rememberID: React.Dispatch<React.SetStateAction<string | null>>;
};

const PuzzleResults = ({ setResults, rememberID }: ResultsProps) => {
  const { progress, puzzleLevel, words, puzzleID } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const dispatch = useTypeDispatch();

  const gameHandler = () => {
    dispatch(clearPuzzleProgress());
    rememberID(null);
    setResults(false);
    window.scrollTo(0, 0);
  };
  const retakeHandler = () => {
    rememberID(puzzleID);
    setResults(false);
    window.scrollTo(0, 0);
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
      <TaskRetake
        progress={progress.length}
        maxValue={puzzleLevel}
        type="puzzle"
        callback={retakeHandler}
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
