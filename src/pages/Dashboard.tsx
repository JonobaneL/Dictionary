import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import Button from "../components/UI/Button";
import RandomWord from "../components/RandomWord";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["one", "two", "three", "four", "five"];
  const indexHandler = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex((p) => p + 1);
      return;
    }
    setWordIndex(0);
  };
  //   useEffect(() => {
  //     const num = setInterval(() => {
  //       indexHandler();
  //     }, 3000);
  //     return () => clearInterval(num);
  //   });
  return (
    <div className={styles.dashboard}>
      <img className={styles.logo} src={logo} alt="logo" />

      <div className={styles.search}>
        <h3>Journey Through Language: Find, Understand, and Learn</h3>
        <div className={styles.search__field}></div>
      </div>
      <RandomWord />
      <button onClick={indexHandler}>prev</button>
      <div className={styles.words}>
        <ul className={styles.list}>
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
      </div>
    </div>
  );
};

export default Dashboard;
