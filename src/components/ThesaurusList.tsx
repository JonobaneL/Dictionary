import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/WordThesaurus.module.scss";
import { useState } from "react";

type ThesaurusListProps = {
  listName: string;
  list: string[];
};

const ThesaurusList = ({ listName, list }: ThesaurusListProps) => {
  const navigate = useNavigate();
  const [wordLimit, setLimit] = useState(10);
  return (
    <>
      <ul className={styles.words}>
        {list?.map((item, index) => {
          if (index <= wordLimit)
            return (
              <li
                key={index}
                className={styles.word}
                onClick={() => navigate(`/word/${item}`)}
              >
                {item}
              </li>
            );
        })}
      </ul>
      {list.length > 10 && wordLimit == 10 && (
        <button className={styles.btn} onClick={() => setLimit(list.length)}>
          Show All
        </button>
      )}
      {wordLimit > 10 && list.length > 0 && (
        <button className={styles.btn} onClick={() => setLimit(10)}>
          Show Less
        </button>
      )}
      {list?.length == 0 && <p>There are no {listName} for this word</p>}
    </>
  );
};

export default ThesaurusList;
