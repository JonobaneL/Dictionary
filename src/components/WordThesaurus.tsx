import { getWordAntonyms, getWordSynonyms } from "../API/wordAPI";
import styles from "../assets/styles/components/WordThesaurus.module.scss";
import Loader from "./UI/Loader";
import ThesaurusList from "./ThesaurusList";

const WordThesaurus = ({ word }: { word: string }) => {
  const { isSynonymsLoading, synonyms } = getWordSynonyms(word);
  const { isAntonymsLoading, antonyms } = getWordAntonyms(word);
  return (
    <div className={styles["word-thesaurus"]}>
      <div className={styles.synonyms}>
        <h3 className={styles.title}>Synonyms</h3>
        {isSynonymsLoading ? (
          <Loader type="small" />
        ) : (
          <ThesaurusList listName="synonyms" list={synonyms || []} />
        )}
      </div>
      <div className={styles.antonyms}>
        <h3 className={styles.title}>Antonyms</h3>
        {isAntonymsLoading ? (
          <Loader type="small" />
        ) : (
          <ThesaurusList listName="antonyms" list={antonyms || []} />
        )}
      </div>
    </div>
  );
};

export default WordThesaurus;
