import styles from "../assets/styles/components/WordSearchResults.module.scss";
import { searchResultsVarints } from "../motionVariants/searchResultsVariants";
import Loader from "./UI/Loader";
import { motion } from "framer-motion";

type WordSearchResultsProps = {
  isLoading: boolean;
  words:
    | {
        data: string[];
        total: number;
      }
    | undefined;
};

const WordSearchResults = ({ isLoading, words }: WordSearchResultsProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={searchResultsVarints}
      transition={{ duration: 0.1 }}
      className={styles["search-results"]}
    >
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <ul className={styles["words-list"]}>
          {words?.data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {words?.total == 0 ? (
        <p>Try another word</p>
      ) : (
        <p className={styles.total}>{words?.total} words</p>
      )}
    </motion.div>
  );
};

export default WordSearchResults;
