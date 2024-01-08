import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import { categories } from "../data/categories";
import Button from "../components/UI/Button";

import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";
import ProgressBar from "../components/UI/ProgressBar";

const TestPage = () => {
  // const [letters, setLetters] = useState([
  //   "q",
  //   "p",
  //   "m",
  //   "x",
  //   "u",
  //   "f",
  //   "e",
  //   "a",
  // ]);
  // const words = [
  //   "qaf",
  //   "faux",
  //   "exam",
  //   "fax",
  //   "apex",
  //   "muxe",
  //   "pax",
  //   "qua",
  //   "max",
  //   "aux",
  //   "axe",
  //   "fame",
  //   "fume",
  //   "ex",
  //   "fupa",
  //   "emf",
  //   "fem",
  //   "fam",
  //   "puma",
  //   "pam",
  //   "map",
  //   "ump",
  //   "amp",
  //   "emu",
  //   "mae",
  //   "ape",
  //   "pea",
  //   "up",
  //   "um",
  //   "am",
  // ];
  // const [progress, setProgress] = useState<string[]>([]);
  // const [word, setWord] = useState<string[]>([]);
  // const wordHandler = (letter: string) => {
  //   setWord((p) => {
  //     if (p.find((item) => item == letter)) {
  //       return p.filter((item) => item !== letter);
  //     }
  //     return [...p, letter];
  //   });
  // };
  // const shuffleLetters = () => {
  //   const res = letters
  //     .map((value) => ({ value, sort: Math.random() }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({ value }) => value);
  //   setLetters(res);
  // };
  // const checkWord = () => {
  //   const currentWord = word.join("");
  //   const wordExist = words.find((item) => item == currentWord);
  //   const progressExist = progress.find((item) => item == currentWord);
  //   if (wordExist && !progressExist) {
  //     setProgress((p) => [...p, currentWord]);
  //   }
  //   setWord([]);
  // };
  const [progress, setProgress] = useState(0);
  const progressMax = 30;
  const currentProgress =
    progress <= progressMax ? (progress / progressMax) * 100 : 100;

  return (
    <div className={styles["test-page"]}>
      <h2>Word Puzzle</h2>
      <br />
      <br />
      {/* <div className={styles.progress}>
        <div
          className={styles.indicator}
          style={{
            width: `${currentProgress}%`,
          }}
        />
      </div> */}
      <ProgressBar maxValue={100} progress={progress} />
      <br />
      <br />
      <button onClick={() => setProgress(5)}>5</button>
      <br />

      <button onClick={() => setProgress(10)}>10</button>
      <br />

      <button onClick={() => setProgress(15)}>15</button>
      <br />

      <button onClick={() => setProgress(30)}>30</button>
    </div>
  );
};

export default TestPage;
