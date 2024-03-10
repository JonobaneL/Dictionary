import styles from "../assets/styles/components/LettersList.module.scss";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { addWordLetter } from "../store/reducers/puzzleSlice";

const LettersList = () => {
  const { letters, wordLetters } = useTypeSelector(
    (state) => state.puzzleReducer
  );
  const dispatch = useTypeDispatch();
  const wordHandler = (letter: number) => dispatch(addWordLetter(letter));
  return (
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
  );
};

export default LettersList;
