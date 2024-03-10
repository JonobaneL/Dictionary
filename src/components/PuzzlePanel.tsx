import styles from "../assets/styles/components/PuzzlePanel.module.scss";
import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import {
  checkPuzzleWord,
  removeWordLetter,
  shuffleLetters,
} from "../store/reducers/puzzleSlice";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { generateNotification } from "../utils/generateNotification";
import LettersList from "./LettersList";
const PuzzlePanel = () => {
  const { progress, words, letters, wordLetters } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const dispatch = useTypeDispatch();
  const word = wordLetters.reduce((prev, item) => prev + letters[item], "");
  const shuffleEvent = () => dispatch(shuffleLetters());
  const checkWord = () => {
    const notificationMessage = generateNotification(words, progress, word);
    dispatch(addNotification(notificationMessage));
    dispatch(checkPuzzleWord(word));
  };
  const removeLetter = () => {
    dispatch(removeWordLetter());
  };
  return (
    <div className={styles.puzzle}>
      <div className={styles.word}>
        <input readOnly placeholder="Click Letter to Select" value={word} />
      </div>
      <LettersList />
      <div className={styles["puzzle-nav"]}>
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
    </div>
  );
};

export default PuzzlePanel;
