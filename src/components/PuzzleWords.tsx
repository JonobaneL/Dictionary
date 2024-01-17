import { PiListMagnifyingGlassBold } from "react-icons/pi";
import styles from "../assets/styles/components/PuzzleWords.module.scss";
import Accordion from "./UI/Accordion";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import { useNavigate } from "react-router-dom";
import WordsList from "./UI/WordsList";

const PuzzleWords = () => {
  const { progress } = useTypeSelector((state) => state.puzzleReducer);
  const navigate = useNavigate();
  return (
    <div className={styles["words-found"]}>
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
        <WordsList words={progress} />
      </Accordion>
    </div>
  );
};

export default PuzzleWords;
