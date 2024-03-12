import styles from "../assets/styles/pages/Vocabulary.module.scss";
import { useSearchParams } from "react-router-dom";
import WordsList from "../components/UI/WordsList";
import Logo from "../components/UI/Logo";
import Loader from "../components/UI/Loader";
import { useVocabulary } from "../hooks/useVocabulary";
import VocabularyParts from "../components/VocabularyParts";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { motion } from "framer-motion";

const Vocabulary = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const level = searchParams.get("level");
  const part = searchParams.get("partOfSpeech");
  const [isLoading, words] = useVocabulary(level, category, part);
  return (
    <motion.div
      className={styles.vocabulary}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <Logo />
      <h1 className={styles.title}>{category || level} Vocabulary List</h1>
      <VocabularyParts />
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <>
          <WordsList words={words.map((item) => item.word)} />
          {words.length == 0 && (
            <p className={styles.empty}>
              Apologies, we don't have any words of this part of speech. Keep
              searching or try another!
            </p>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Vocabulary;
