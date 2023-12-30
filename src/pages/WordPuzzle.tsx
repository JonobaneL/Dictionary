import styles from "../assets/styles/pages/WordPuzzle.module.scss";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";

const WordPuzzle = () => {
  const [letters, setLetters] = useState([
    "q",
    "p",
    "m",
    "x",
    "u",
    "f",
    "e",
    "a",
  ]);
  const words = [
    "qaf",
    "faux",
    "exam",
    "fax",
    "apex",
    "muxe",
    "pax",
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
  const [word, setWord] = useState<string[]>([]);
  const wordHandler = (letter: string) => {
    setWord((p) => {
      if (p.find((item) => item == letter)) {
        return p.filter((item) => item !== letter);
      }
      return [...p, letter];
    });
  };
  const shuffleLetters = () => {
    const res = letters
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setLetters(res);
  };
  const checkWord = () => {
    const currentWord = word.join("");
    const wordExist = words.find((item) => item == currentWord);
    const progressExist = progress.find((item) => item == currentWord);
    if (wordExist && !progressExist) {
      setProgress((p) => [...p, currentWord]);
    }
    setWord([]);
  };

  return (
    <div className={styles["word-puzzle"]}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2 className={styles.title}>Word Puzzle</h2>
      <div className={styles.progress}>
        <h4>
          {progress.length}/{words.length}
        </h4>
        <progress
          className={styles.indicator}
          max={words.length}
          value={progress.length}
        />
      </div>

      <div className={styles.quiz}>
        <div className={styles.letters}>
          <div className={styles.word}>
            <input
              readOnly
              placeholder="Click Letter to Select"
              value={word.join("")}
            />
          </div>
          <ul className={styles.list}>
            {letters.map((item, index) => (
              <li
                className={`${styles.letter} ${
                  word.includes(item) ? styles.active : ""
                }`}
                key={index}
                onClick={() => wordHandler(item)}
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
            <button onClick={() => setWord((p) => p.slice(0, -1))}>
              <IoArrowBack size="1.5rem" color="#3f707d" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPuzzle;
