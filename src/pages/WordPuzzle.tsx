import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import { useEffect } from "react";
import PuzzlePanel from "../components/PuzzlePanel";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { setPuzzleConditions } from "../store/reducers/puzzleSlice";
import Loader from "../components/UI/Loader";
import PuzzleProgress from "../components/PuzzleProgress";
import PuzzleWords from "../components/PuzzleWords";
import PuzzleRules from "../components/PuzzleRules";
import { useLocation } from "react-router-dom";
import Logo from "../components/UI/Logo";
import EndPuzzleBtn from "../components/EndPuzzleBtn";

const WordPuzzle = () => {
  const dispatch = useTypeDispatch();
  const { isLoading, progress, puzzleID, puzzleLevel } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const location = useLocation();
  const currentID = location.state ? location.state.puzzleID : undefined;

  useEffect(() => {
    dispatch(setPuzzleConditions({ currentID, puzzleID }));
  }, []);

  return (
    <div className={styles["word-puzzle"]}>
      <Logo />
      <h2 className={styles.title}>Word Puzzle</h2>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader type="small" />
        </div>
      ) : (
        <>
          <PuzzleProgress />
          <PuzzlePanel />
          <div className={styles.end}>
            <EndPuzzleBtn
              puzzleID={puzzleID || ""}
              level={puzzleLevel}
              progress={progress.length}
            />
          </div>
          {progress.length > 0 && <PuzzleWords />}
          <PuzzleRules />
        </>
      )}
    </div>
  );
};

export default WordPuzzle;
