import { useState } from "react";
import styles from "../assets/styles/components/PuzzlePanel.module.scss";
import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";
import Notification from "./UI/Notification";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import {
  addWordLetter,
  checkPuzzleWord,
  removeWordLetter,
  shuffleLetters,
} from "../store/reducers/puzzleSlice";
//split component
const PuzzlePanel = () => {
  const { progress, words, letters, wordLetters } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const dispatch = useTypeDispatch();
  const word = wordLetters.reduce((prev, item) => prev + letters[item], "");
  const [notification, setNotification] = useState<string | null>(null);
  const wordHandler = (letter: number) => {
    dispatch(addWordLetter(letter));
  };
  const shuffleEvent = () => {
    dispatch(shuffleLetters());
  };
  const checkWord = () => {
    const wordExist = words?.includes(word);
    const progressExist = progress.includes(word);
    const notificationMessage = progressExist
      ? "Already found"
      : !wordExist
      ? "Not on the list"
      : "Way to go!";
    setNotification(notificationMessage);
    dispatch(checkPuzzleWord(word));
  };
  const removeLetter = () => {
    dispatch(removeWordLetter());
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
        <button onClick={shuffleEvent}>
          <TiArrowShuffle size="1.5rem" color="#3f707d" />
        </button>
        <button className={styles.submit} onClick={checkWord}>
          Submit
        </button>
        <button onClick={removeLetter}>
          <IoArrowBack size="1.5rem" color="#3f707d" />
        </button>
      </div>
      <Notification
        notification={notification}
        handler={setNotification}
        closeTime={1}
      />
    </div>
  );
};

export default PuzzlePanel;
