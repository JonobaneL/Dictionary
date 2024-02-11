import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/WordsSearchResult.module.scss";
import { WordsSearchResultProps } from "../models/WordTypes";
import { searchResultsVariants } from "../motionVariants/searchResultsVariants";
import { motion } from "framer-motion";

const WordsSearchResult = ({ words }: WordsSearchResultProps) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={searchResultsVariants}
      transition={{ duration: 0.2 }}
      className={styles["search-result"]}
    >
      <ul className={styles["words-list"]}>
        {words?.data.map((item, index) => (
          <li key={index} onClick={() => navigate(`/word/${item}`)}>
            {item}
          </li>
        ))}
      </ul>
      {words?.total == 0 ? (
        <p>Try another word</p>
      ) : (
        <p className={styles.total}>{words?.total} words</p>
      )}
    </motion.div>
  );
};

export default WordsSearchResult;
