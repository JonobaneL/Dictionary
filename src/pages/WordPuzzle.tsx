import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import { useEffect, useState } from "react";
import PuzzlePanel from "../components/PuzzlePanel";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { setPuzzleConditions } from "../store/reducers/puzzleSlice";
import Loader from "../components/UI/Loader";
import PuzzleProgress from "../components/PuzzleProgress";
import PuzzleWords from "../components/PuzzleWords";
import PuzzleRules from "../components/PuzzleRules";
import Logo from "../components/UI/Logo";
import EndPuzzleBtn from "../components/EndPuzzleBtn";
import FullPageModal from "../components/UI/FullPageModal";
import PuzzleResults from "../components/PuzzleResults";
import { motion } from "framer-motion";
import { routesVariants } from "../motionVariants/RoutesVariants";

const WordPuzzle = () => {
  const dispatch = useTypeDispatch();
  const [results, setResults] = useState(false);
  const { isLoading, progress, puzzleID } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const [currentID, setCurrentID] = useState<string | null>(null);
  useEffect(() => {
    dispatch(setPuzzleConditions({ currentID, puzzleID }));
  }, [currentID]);
  return (
    <motion.div
      className={styles["word-puzzle"]}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
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
            <EndPuzzleBtn setResults={setResults} />
          </div>
          {progress.length > 0 && <PuzzleWords />}
          <PuzzleRules />
        </>
      )}
      <FullPageModal status={results}>
        <PuzzleResults rememberID={setCurrentID} setResults={setResults} />
      </FullPageModal>
    </motion.div>
  );
};

export default WordPuzzle;
