import { useState } from "react";
import styles from "../assets/styles/components/SearchField.module.scss";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useInterval } from "../hooks/useInterval";
import { SearchFieldProps } from "../models/SearchFieldProps";
import { useNavigate } from "react-router-dom";

const SearchField = ({ value, status, onChange }: SearchFieldProps) => {
  const words = ["Example", "Apple", "Tree", "Understand", "Happy"];
  const [wordIndex, setWordIndex] = useState(0);
  const navigate = useNavigate();
  const indexHandler = () => {
    setWordIndex((p) => (p < words.length - 1 ? p + 1 : 0));
  };
  const submitHandler = () => {
    navigate(`/search-results/${value.toLocaleLowerCase()}`);
  };
  useInterval(indexHandler, 3000, []);
  return (
    <div className={styles.search}>
      <form onSubmit={submitHandler}>
        <input
          value={value}
          onChange={(e) => onChange(e?.target?.value)}
          className={styles.search__field}
          type="text"
        />
        <button type="submit" className={styles.search__icon}>
          <HiMiniMagnifyingGlass color="#3f707d" size="100%" />
        </button>
      </form>
      {!status && value.length == 0 ? (
        <ul className={styles["words-list"]}>
          {words.map((item, index) => (
            <li
              key={index}
              className={`${styles.item} ${
                wordIndex == index ? styles.active : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchField;
