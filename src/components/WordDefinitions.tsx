import { useParams } from "react-router-dom";
import styles from "../assets/styles/components/WordDefinitions.module.scss";
import { getWordDetails } from "../API/wordAPI";

const WordDefinitions = () => {
  const { word } = useParams();
  console.log("word-definitions = ", word);
  const { isLoading, wordDetails } = getWordDetails(word);
  console.log(isLoading, wordDetails);
  return <div className={styles["word-definitions"]}></div>;
};

export default WordDefinitions;
