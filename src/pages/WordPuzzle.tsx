import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import ProgressBar from "../components/UI/ProgressBar";
import PuzzlePanel from "../components/PuzzlePanel";

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
    </div>
  );
};

export default WordPuzzle;
