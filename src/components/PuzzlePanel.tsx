import React, { useState } from "react";
import styles from "../assets/styles/components/PuzzlePanel.module.scss";
import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";

type PanelProps = {
  progress: string[];
  progressHandler: React.Dispatch<React.SetStateAction<string[]>>;
};

const PuzzlePanel = ({ progress, progressHandler }: PanelProps) => {
  const [letters, setLetters] = useState([
    "q",
    "p",
    "m",
    "q",
    "u",
    "f",
    "e",
    "a",
  ]);
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
  const [wordLetters, setWordLetters] = useState<number[]>([]);
  const word = wordLetters.reduce((prev, item) => prev + letters[item], "");
  const wordHandler = (letter: number) => {
    setWordLetters((p) => {
      if (p.find((item) => item == letter)) {
        return p.filter((item) => item !== letter);
      }
      return [...p, letter];
    });
  };
  const shuffleLetters = () => {
    setWordLetters([]);
    const res = letters
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setLetters(res);
  };
  const checkWord = () => {
    const wordExist = words.find((item) => item == word);
    const progressExist = progress.find((item) => item == word);
    if (wordExist && !progressExist) {
      progressHandler((p) => [...p, word]);
    }
    setWordLetters([]);
  };
  return (
    <div className={styles.quiz}>
      <div className={styles.word}>
        <input readOnly placeholder="Click Letter to Select" value={word} />
      </div>
      <ul className={styles.list}>
        {letters.map((item, index) => (
          <li
            className={`${styles.letter} ${
              wordLetters.includes(index) ? styles.active : ""
            }`}
            key={index}
            onClick={() => wordHandler(index)}
          >
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <div className={styles["quiz-nav"]}>
        <button onClick={shuffleLetters}>
          <TiArrowShuffle size="1.5rem" color="#3f707d" />
        </button>
        <button className={styles.submit} onClick={checkWord}>
          Submit
        </button>
        <button onClick={() => setWordLetters((p) => p.slice(0, -1))}>
          <IoArrowBack size="1.5rem" color="#3f707d" />
        </button>
      </div>
    </div>
  );
};

export default PuzzlePanel;
