import { useNavigate } from "react-router-dom";
import styles from "../../assets/styles/UI/WordsList.module.scss";

type ListProps = {
  words: string[] | null;
};
const WordsList = ({ words }: ListProps) => {
  const navigate = useNavigate();
  return (
    <ul className={styles.words}>
      {words?.map((item, index) => (
        <li className={styles.word} key={index}>
          <p onClick={() => navigate(`/word/${item}`)}>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default WordsList;
