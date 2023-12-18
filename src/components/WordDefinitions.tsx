import styles from "../assets/styles/components/WordDefinitions.module.scss";
import { WordResponse } from "../models/WordTypes";

const WordDefinitions = ({ word }: { word: WordResponse | undefined }) => {
  return (
    <div className={styles["word-definitions"]}>
      <h3 className={styles.title}>Definitions for {word?.word}</h3>
      {word?.meanings.map((item, index) => (
        <div key={index} className={styles.meaning}>
          <i className={styles.partOfSpeech}>{item.partOfSpeech}</i>
          <ol className={styles.definitions}>
            {item.definitions.map((definition, index) => (
              <li key={index}>
                <p>{definition.definition}</p>
                <i className={styles.example}>{definition?.example}</i>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default WordDefinitions;
