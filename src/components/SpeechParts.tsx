import { useSearchParams } from "react-router-dom";
import styles from "../assets/styles/components/SpeechParts.module.scss";
import { partsOfSpeech } from "../data/partsOfSpeech";

type PartsProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpeechParts = ({ setModal }: PartsProps) => {
  const [searchParam, setSearchParams] = useSearchParams();
  const part = searchParam.get("partOfSpeech");
  const partHandler = (part: string) => {
    setSearchParams((current) => {
      current.set("partOfSpeech", part);
      return current;
    });
    setModal(false);
  };
  return (
    <ul className={styles.parts}>
      {partsOfSpeech.map((item, index) => (
        <li
          className={`${styles.part} ${part == item ? styles.active : ""}`}
          key={index}
          onClick={() => partHandler(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SpeechParts;
