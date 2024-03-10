import styles from "../assets/styles/components/VocabularyParts.module.scss";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CgOptions } from "react-icons/cg";
import ModalWindow from "./UI/ModalWindow";
import SpeechParts from "./SpeechParts";

const VocabularyParts = () => {
  const [isFilterOpen, setIsOpen] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const part = searchParam.get("partOfSpeech");
  const showAllHandler = () => {
    setSearchParams((current) => {
      current.delete("partOfSpeech");
      return current;
    });
  };
  return (
    <div className={styles["speech-parts"]}>
      {part && (
        <button className={styles.clear} onClick={showAllHandler}>
          Show All
        </button>
      )}
      <button onClick={() => setIsOpen(true)}>
        <CgOptions size="1.3rem" color="#3f707d" />
        <p>Part of Speech</p>
      </button>
      <ModalWindow
        onChange={setIsOpen}
        status={isFilterOpen}
        title="Part of Speech"
      >
        <SpeechParts setModal={setIsOpen} />
      </ModalWindow>
    </div>
  );
};

export default VocabularyParts;
