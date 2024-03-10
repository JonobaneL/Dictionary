import styles from "../assets/styles/components/PuzzleResults.module.scss";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import Button from "./UI/Button";
import Accordion from "./UI/Accordion";
import WordsList from "./UI/WordsList";
import TaskRetake from "./TaskRetake";
import Logo from "./UI/Logo";
import CircleProgress from "./UI/CircleProgress";
import { getRandomPuzzleID } from "../utils/getRandomPuzzleID";
import { closeModalEvent } from "../utils/closeModalEvent";

type ResultsProps = {
  setResults: React.Dispatch<React.SetStateAction<boolean>>;
  rememberID: React.Dispatch<React.SetStateAction<string | null>>;
};

const PuzzleResults = ({ setResults, rememberID }: ResultsProps) => {
  const { progress, puzzleLevel, words, puzzleID } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const { user } = useTypeSelector((state) => state.userReducer);
  const gameHandler = async () => {
    const rand = await getRandomPuzzleID(puzzleID, user.puzzles);
    rememberID(rand);
    closeModalEvent(setResults);
  };
  const retakeHandler = () => {
    rememberID(puzzleID);
    closeModalEvent(setResults);
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
