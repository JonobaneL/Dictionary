import styles from "../assets/styles/components/RandomWord.module.scss";
import { getRandomWord } from "../utils/getRandomWord";
import Loader from "./UI/Loader";

const RandomWord = () => {
  const { isLoading, randomWord } = getRandomWord();
  return (
    <div className={styles["random-word"]}>
      <h3>Random Word</h3>
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <>
          <p className={styles.word}>{randomWord?.word}</p>
          {randomWord?.results ? (
            <>
              <p className={styles.transcription}>
                <i>{randomWord?.results[0]?.partOfSpeech} </i>
                {randomWord?.pronunciation ? (
                  typeof randomWord?.pronunciation !== "string" ? (
                    <>&#91;{randomWord.pronunciation?.all}&#93;</>
                  ) : (
                    <>&#91;{randomWord.pronunciation}&#93;</>
                  )
                ) : null}
              </p>
              <i>{randomWord?.results[0]?.definition || ""}</i>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default RandomWord;
