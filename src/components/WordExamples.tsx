import { getWordExamples } from "../API/wordAPI";
import styles from "../assets/styles/components/WordExamples.module.scss";
import Loader from "./UI/Loader";

type ExamplesProps = {
  word: string;
};

const WordExamples = ({ word }: ExamplesProps) => {
  const { isLoading, examples } = getWordExamples(word);
  return (
    <div className={styles["word-examples"]}>
      <h3 className={styles.title}>Examples of {word}</h3>
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <ul className={styles.examples}>
          {examples?.map((item, index) => (
            <li className={styles.example} key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WordExamples;
