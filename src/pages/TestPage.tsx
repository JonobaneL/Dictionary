import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import { categories } from "../data/categories";
import Button from "../components/UI/Button";

const TestPage = () => {
  const word = "evidence";
  const itemsToShow = 6;
  const [categoryIndex, setIndex] = useState(6);

  const categoryProgress = progress(0, itemsToShow, categoryIndex);
  return (
    <div className={styles["test-page"]}>
      <motion.div className={styles.categories} layout>
        {categories.map((item, index) => {
          const delayIndex = itemsToShow * (categoryProgress - 1);
          if (index < categoryIndex && index >= categoryIndex - itemsToShow)
            return (
              <motion.div
                layout
                key={index}
                className={styles.category}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: (index - delayIndex) * 0.1,
                  },
                }}
              >
                <p>{item.name}</p>
              </motion.div>
            );
        })}
      </motion.div>
      <br />
      <br />
      <Button
        width="10rem"
        mode="primary"
        onClick={() => setIndex((p) => p - itemsToShow)}
      >
        Prev
      </Button>
      <span> </span>
      <Button
        mode="primary"
        width="10rem"
        onClick={() => setIndex((p) => p + itemsToShow)}
      >
        Next
      </Button>
    </div>
  );
};

export default TestPage;
