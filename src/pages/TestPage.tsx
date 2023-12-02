import styles from "../assets/styles/pages/TestPage.module.scss";
import { RiHome5Line } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
import { useState } from "react";

const TestPage = () => {
  const [index, setIndex] = useState(1);
  const iconColor = "#fff";

  const iconActiveColor = "#3f707d";
  return (
    <div className={styles["test-page"]}>
      <div className={styles.navbar}>
        <div
          className={`${styles.nav} ${index == 1 ? styles.active : ""}`}
          onClick={() => setIndex(1)}
        >
          <RiHome5Line
            size="1.5rem"
            color={index == 1 ? iconActiveColor : iconColor}
          />
        </div>
        <div
          className={`${styles.nav} ${index == 2 ? styles.active : ""}`}
          onClick={() => setIndex(2)}
        >
          <RiFileList2Line
            size="1.5rem"
            color={index == 2 ? iconActiveColor : iconColor}
          />
        </div>
        <div
          className={`${styles.nav} ${index == 3 ? styles.active : ""}`}
          onClick={() => setIndex(3)}
        >
          <LuBell
            size="1.5rem"
            color={index == 3 ? iconActiveColor : iconColor}
          />
        </div>
        <div
          className={`${styles.nav} ${index == 4 ? styles.active : ""}`}
          onClick={() => setIndex(4)}
        >
          <LuUser
            size="1.5rem"
            color={index == 4 ? iconActiveColor : iconColor}
          />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
