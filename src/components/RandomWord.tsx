import styles from "../assets/styles/components/RandomWord.module.scss";

const RandomWord = () => {
  //fetch random word code
  return (
    <div className={styles["random-word"]}>
      <h3>Random Word</h3>
      <p className={styles.word}>Evidence</p>
      <p className={styles.transcription}>
        <i>verb </i>[ ɛvɪdəns ]
      </p>
      <p className={styles.description}>Provide evidence for</p>
      <i>The evidence that smoking causes lung cancer is very compelling</i>
    </div>
  );
};

export default RandomWord;
