import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import ProgressBar from "../components/UI/ProgressBar";
import PuzzlePanel from "../components/PuzzlePanel";
import { FaRegQuestionCircle } from "react-icons/fa";
import Accordion from "../components/UI/Accordion";
import Button from "../components/UI/Button";
import { PiListMagnifyingGlassBold } from "react-icons/pi";

//split component

const WordPuzzle = () => {
  const words = [
    "faux",
    "exam",
    "fax",
    "apex",
    "qua",
    "max",
    "aux",
    "axe",
    "fame",
    "fume",
    "ex",
    "fupa",
    "emf",
    "fem",
    "fam",
    "puma",
    "pam",
    "map",
    "ump",
    "amp",
    "emu",
    "mae",
    "ape",
    "pea",
    "up",
    "um",
    "am",
  ];
  const [progress, setProgress] = useState<string[]>([]);
  return (
    <div className={styles["word-puzzle"]}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.title}>Word Puzzle</h2>
      <div className={styles.progress}>
        <h4>
          {progress.length}/{words.length}
        </h4>
        <ProgressBar maxValue={words.length} progress={progress.length} />
      </div>
      <PuzzlePanel progress={progress} progressHandler={setProgress} />
      <div className={styles.end}>
        <Button mode="primary" align="center">
          End Game
        </Button>
      </div>
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
          <ul className={styles["rules__list"]}>
            <li>Create words by selecting the letters provided.</li>
            <li>You can use your mouse to select letters and submit words.</li>
            <li>Letters can only be used once per word.</li>
          </ul>
        </Accordion>
      </div>
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
            <li>You can use your mouse to select letters and submit words.</li>
            <li>Letters can only be used once per word.</li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default WordPuzzle;
