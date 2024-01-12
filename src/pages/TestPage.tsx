import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import { categories } from "../data/categories";
import Button from "../components/UI/Button";

import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";
import ProgressBar from "../components/UI/ProgressBar";
import Notification from "../components/UI/Notification";

const TestPage = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const notifications1 = ["Way to go!", "Already found", "Not on the list"];

  return (
    <div className={styles["test-page"]}>
      <h1>Lorem ipsum</h1>
      <h2> Lorem ipsum dolor sit amet</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quae
        exercitationem sunt fugit aperiam voluptatibus excepturi animi
        explicabo, saepe qui laborum officia expedita consequatur quos
        repellendus. Consectetur maxime atque architecto?
      </p>
      <button onClick={() => setNotification("Way to go!")}>
        Add someting
      </button>
      <button onClick={() => setNotification("Already found")}>
        Add someting
      </button>
      <button onClick={() => setNotification("Not on the list")}>
        Add someting
      </button>
      <Notification notification={notification} handler={setNotification} />
    </div>
  );
};

export default TestPage;
