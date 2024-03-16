import { useParams } from "react-router-dom";
import styles from "../assets/styles/pages/WordDetails.module.scss";
import Tabs from "../components/UI/Tabs";
import { getWordDetails } from "../API/wordAPI";
import { wordDetailsTabs } from "../data/tabs";
import { memo } from "react";
import WordDefinitions from "../components/WordDefinitions";
import WordThesaurus from "../components/WordThesaurus";
import Loader from "../components/UI/Loader";
import WordExamples from "../components/WordExamples";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { motion } from "framer-motion";
import WordAudio from "../components/WordAudio";

const WordDetails = memo(() => {
  const { word } = useParams();
  const { isLoading, wordDetails } = getWordDetails(word);
  if (isLoading) return <Loader type="standart" />;
  return (
    <motion.div
      className={styles["word-details"]}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <div className={styles["word-section"]}>
        <div className={styles.word}>
          <h1>{wordDetails?.word}</h1>
          <p>
            {wordDetails?.phonetic ||
              wordDetails?.phonetics[wordDetails?.phonetics.length - 1].text}
          </p>
        </div>
        <div className={styles["word-nav"]}>
          {wordDetails?.phonetics[0]?.audio && (
            <WordAudio audio={wordDetails?.phonetics[0]?.audio} />
          )}
        </div>
      </div>
      <div style={{ paddingInline: "1.3rem" }}>
        <Tabs tabs={wordDetailsTabs}>
          <WordDefinitions word={wordDetails} />
          <WordThesaurus word={wordDetails?.word || ""} />
          <WordExamples word={wordDetails?.word || ""} />
        </Tabs>
      </div>
    </motion.div>
  );
});

export default WordDetails;
