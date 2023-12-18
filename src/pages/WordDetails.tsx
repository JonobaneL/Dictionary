import { useParams } from "react-router-dom";
import styles from "../assets/styles/pages/WordDetails.module.scss";
import { FaRegStar } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import Tabs from "../components/UI/Tabs";
import { getWordDetails } from "../API/wordAPI";
import { wordDetailsTabs } from "../data/tabs";
import { memo, useRef } from "react";
import WordDefinitions from "../components/WordDefinitions";
import WordThesaurus from "../components/WordThesaurus";
import Loader from "../components/UI/Loader";
import WordExamples from "../components/WordExamples";

const WordDetails = memo(() => {
  const { word } = useParams();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isLoading, wordDetails } = getWordDetails(word);
  const audioEvent = () => {
    audioRef?.current?.play();
  };
  document.body.style.overflow = "visible";
  if (isLoading) return <Loader type="standart" />;
  return (
    <div className={styles["word-details"]}>
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
            <>
              <HiMiniSpeakerWave
                onClick={audioEvent}
                size="1.5rem"
                color="#fcf9f8"
                className={styles.icon}
              />
              <audio ref={audioRef} src={wordDetails?.phonetics[0]?.audio} />
            </>
          )}
          <FaRegStar size="1.4rem" color="#fcf9f8" className={styles.icon} />
        </div>
      </div>
      <div style={{ paddingInline: "1.3rem" }}>
        <Tabs tabs={wordDetailsTabs}>
          <WordDefinitions word={wordDetails} />
          <WordThesaurus word={wordDetails?.word || ""} />
          <WordExamples word={wordDetails?.word || ""} />
        </Tabs>
      </div>
    </div>
  );
});

export default WordDetails;
