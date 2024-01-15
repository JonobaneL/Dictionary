import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import logo from "../assets/images/logo.svg";
import { useEffect } from "react";
import PuzzlePanel from "../components/PuzzlePanel";
import { FaRegQuestionCircle } from "react-icons/fa";
import Accordion from "../components/UI/Accordion";
import Button from "../components/UI/Button";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { setPuzzleConditions } from "../store/reducers/puzzleSlice";
import Loader from "../components/UI/Loader";
import PuzzleProgress from "../components/PuzzleProgress";
import PuzzleWords from "../components/PuzzleWords";

//split component

const WordPuzzle = () => {
  const dispatch = useTypeDispatch();
  const { isLoading, progress } = useTypeSelector(
    (state) => state.puzzleReducer
  );

  useEffect(() => {
    dispatch(setPuzzleConditions());
  }, []);

  return (
    <div className={styles["word-puzzle"]}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.title}>Word Puzzle</h2>
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <>
          <PuzzleProgress />
          <PuzzlePanel />
          <div className={styles.end}>
            <Button mode="primary" align="center">
              End Game
            </Button>
          </div>
          {/* <div className={styles["words-found"]}>
            <Accordion
              header={
                <div className={styles.head}>
                  <h4>Words Found</h4>
                  <button>
                    <PiListMagnifyingGlassBold size="1.3rem" color="#3f707d" />
                  </button>
                </div>
              }
            >
              <ul className={styles["rules__list"]}>
                {progress.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Accordion>
          </div> */}
          <PuzzleWords />
          <div className={styles.rules}>
            <Accordion
              header={
                <div className={styles.head}>
                  <h4>How to play?</h4>
                  <button>
                    <FaRegQuestionCircle size="1.3rem" color="#3f707d" />
                  </button>
                </div>
              }
            >
              <ul className={styles["rules__list"]}>
                <li>Create words by selecting the letters provided.</li>
                <li>
                  You can use your mouse to select letters and submit words.
                </li>
                <li>Letters can only be used once per word.</li>
              </ul>
            </Accordion>
          </div>
        </>
      )}
    </div>
  );
};

export default WordPuzzle;
