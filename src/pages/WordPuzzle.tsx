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
import { useLocation, useNavigate } from "react-router-dom";

const WordPuzzle = () => {
  const dispatch = useTypeDispatch();
  const { isLoading, progress } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const navigate = useNavigate();
  const location = useLocation();
  const puzzleID = location.state ? location.state.puzzleID : undefined;
  console.log(puzzleID);

  useEffect(() => {
    dispatch(setPuzzleConditions(puzzleID));
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
              onClick={() => {
                //add puzzleID to localStorage
                window.scrollTo(0, 0);
                navigate("/puzzle-results");
              }}
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
