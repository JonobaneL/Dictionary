import { useEffect, useState } from "react";
import styles from "../assets/styles/components/SearchField.module.scss";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useInterval } from "../hooks/useInterval";
import { SearchFieldProps } from "../models/SearchFieldProps";

const SearchField = ({
  value,
  onChange,
  setSearchStatus,
}: SearchFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const words = ["Example", "Apple", "Tree", "Understand", "Happy"];
  const [wordIndex, setWordIndex] = useState(0);
  const indexHandler = () => {
    console.log(wordIndex);
    // if (wordIndex < words.length - 1) {
    //   setWordIndex((p) => p + 1);
    //   return;
    // } else {
    //   setWordIndex(0);
    //   console.log("func");
    // }
    // setWordIndex(0);
    setWordIndex((p) => p + 1);
  };
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //         indexHandler();
  //     //
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <div className={styles.search}>
      <input
        value={value}
        onChange={(e) => onChange(e?.target?.value)}
        onFocus={() => {
          setIsFocused(true);
          setSearchStatus(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          setSearchStatus(false);
        }}
        className={styles.search__field}
        type="text"
      />
      <div className={styles.search__icon}>
        <HiMiniMagnifyingGlass />
      </div>
      {!isFocused && value.length == 0 ? (
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
