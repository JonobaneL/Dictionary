import styles from "../assets/styles/components/DashboardSearch.module.scss";
import magGlass from "../assets/images/mag_glass.svg";
import { useEffect, useState } from "react";

const DashboardSearch = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [searchRequest, setSearchRequest] = useState("");
  const words = ["Example", "Apple", "Tree", "Understand", "Happy"];
  const indexHandler = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex((p) => p + 1);
      return;
    }
    setWordIndex(0);
  };
  useEffect(() => {
    const num = setInterval(() => {
      indexHandler();
    }, 5000);
    return () => clearInterval(num);
  });
  return (
    <div className={styles["dashboard-search"]}>
      <h3>Journey Through Language: Find, Understand, and Learn</h3>
      <div className={styles.search}>
        <input
          value={searchRequest}
          onChange={(e) => setSearchRequest(e?.target?.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.search__field}
          type="text"
        />
        <img className={styles.search__icon} src={magGlass} alt="search" />
        {!isFocused && searchRequest.length == 0 ? (
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
    </div>
  );
};

export default DashboardSearch;
