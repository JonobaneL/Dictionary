import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import logo from "../assets/images/logo.svg";
import { useEffect } from "react";
import PuzzlePanel from "../components/PuzzlePanel";
import Button from "../components/UI/Button";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { setPuzzleConditions } from "../store/reducers/puzzleSlice";
import Loader from "../components/UI/Loader";
import PuzzleProgress from "../components/PuzzleProgress";
import PuzzleWords from "../components/PuzzleWords";
import PuzzleRules from "../components/PuzzleRules";
import { useNavigate } from "react-router-dom";

const WordPuzzle = () => {
  const dispatch = useTypeDispatch();
  const { isLoading, progress } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setPuzzleConditions());
  }, []);

  return (
    <div className={styles["word-puzzle"]}>
      <img src={logo} className={styles.logo} alt="logo" />
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
            <Button
              mode="primary"
              align="center"
              onClick={() => navigate("/puzzle-results")}
            >
              End Game
            </Button>
          </div>
          {progress.length > 0 && <PuzzleWords />}
          <PuzzleRules />
        </>
      )}
    </div>
  );
};

export default WordPuzzle;
