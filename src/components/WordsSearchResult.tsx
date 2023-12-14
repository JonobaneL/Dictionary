import styles from "../assets/styles/components/WordsSearchResult.module.scss";
import {
  searchResultsVariants,
  searchResultWrapperVariants,
} from "../motionVariants/searchResultsVariants";
import { motion } from "framer-motion";
type WordsSearchResultProps = {
  words:
    | {
        data: string[];
        total: number;
      }
    | undefined;
  state: boolean;
};

const WordsSearchResult = ({ words, state }: WordsSearchResultProps) => {
  if (state == false) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.1 }}
      variants={searchResultWrapperVariants}
      className={styles.wrapper}
    >
      {words ? (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={searchResultsVariants}
          transition={{ duration: 0.1, delay: 0.1 }}
          className={styles["search-result"]}
        >
          <ul className={styles["words-list"]}>
            {words?.data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {words?.total == 0 ? (
            <p>Try another word</p>
          ) : (
            <p className={styles.total}>{words?.total} words</p>
          )}
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default WordsSearchResult;
