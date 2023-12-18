import { useState } from "react";
import styles from "../assets/styles/components/DashboardCategories.module.scss";
import { categories } from "../data/categories";
import { motion, progress } from "framer-motion";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { categoryVariants } from "../motionVariants/categoryVariants";

const DashboardCategories = () => {
  const [categoryIndex, setCategoryIndex] = useState(6);
  const itemsToShow = 6;
  const categoryProgress = progress(0, itemsToShow, categoryIndex);
  const navHandler = (index: number) => {
    setCategoryIndex((p) => p + itemsToShow * index);
  };
  return (
    <div className={styles["word-categories"]}>
      <h3 className={styles.title}>
        Explore by Themes: Navigate Words through Categories
      </h3>
      <div className={styles["categories-list"]}>
        {categories.map((item, index) => {
          const delayIndex = itemsToShow * (categoryProgress - 1);
          if (index < categoryIndex && index >= categoryIndex - itemsToShow)
            return (
              <motion.div
                key={index}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(63,112,125,0.85) 30%, rgba(255,255,255,0.3) 100%), url(${item.icon})`,
                }}
                className={styles.category}
                initial="hidden"
                animate="visible"
                custom={{ index, delayIndex }}
                variants={categoryVariants}
              >
                <p>{item.name}</p>
              </motion.div>
            );
        })}
      </div>
      <div className={styles["categories-nav"]}>
        <MdArrowBackIosNew
          size="1.3rem"
          color="#3f707d"
          className={styles.arrow}
          onClick={() => categoryIndex > 6 && navHandler(-1)}
        />
        <MdArrowForwardIos
          size="1.3rem"
          color="#3f707d"
          className={styles.arrow}
          onClick={() => categoryIndex < categories.length && navHandler(1)}
        />
      </div>
    </div>
  );
};

export default DashboardCategories;
