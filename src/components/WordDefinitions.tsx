import { useParams } from "react-router-dom";
import styles from "../assets/styles/components/WordDefinitions.module.scss";
import { getWordDetails } from "../API/wordAPI";
import Loader from "./UI/Loader";

const WordDefinitions = () => {
  const { word } = useParams();

  const { isLoading, wordDetails } = getWordDetails(word);
  console.log(wordDetails);
  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader type="small" />
      </div>
    );
  return (
    <div className={styles["word-definitions"]}>
      <h3 className={styles.title}>Definitions for {wordDetails?.word}</h3>
      {wordDetails?.meanings.map((item, index) => (
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
