import { useState } from "react";
import styles from "../assets/styles/components/DashboardCategories.module.scss";
import { categories } from "../data/categories";
import { motion, progress } from "framer-motion";
import { categoryVariants } from "../motionVariants/categoryVariants";
import { useNavigate } from "react-router-dom";
import CategoriesNav from "./UI/CategoriesNav";

const DashboardCategories = () => {
  const [categoryIndex, setCategoryIndex] = useState(6);
  const itemsToShow = 6;
  const categoryProgress = progress(0, itemsToShow, categoryIndex);
  const navigate = useNavigate();
  const handler = (category: string) => {
    navigate("/vocabulary-list?category=" + encodeURIComponent(category));
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
                onClick={() => handler(item.name)}
              >
                <p>{item.name}</p>
              </motion.div>
            );
        })}
      </div>
      <CategoriesNav
        index={categoryIndex}
        max={categories.length}
        setIndex={setCategoryIndex}
      />
    </div>
  );
};

export default DashboardCategories;
