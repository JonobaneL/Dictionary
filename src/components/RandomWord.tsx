import { useEffect, useState } from "react";
import styles from "../assets/styles/components/RandomWord.module.scss";
import { getRandomWord } from "../utils/getRandomWord";

const RandomWord = () => {
  //to turn on the fuctionality,uncoment useEffect in this method
  const randomWord = getRandomWord();
  console.log(randomWord);
  return (
    <div className={styles["random-word"]}>
      <h3>Random Word</h3>
      <p className={styles.word}>{randomWord?.word}</p>
      {randomWord?.results ? (
        <>
          <p className={styles.transcription}>
            <i>{randomWord?.results[0]?.partOfSpeech}</i> [
            {typeof randomWord?.pronunciation !== "string"
              ? randomWord.pronunciation?.all
              : randomWord.pronunciation}
            ]
          </p>
          <i>{randomWord?.results[0]?.definition || ""}</i>
        </>
      ) : null}
    </div>
  );
};

export default RandomWord;
