import { useState } from "react";
import arrow from "../assets/images/advantages/arrow-primary.svg";
import styles from "../assets/styles/components/DashboardCategories.module.scss";
import { categories } from "../data/categories";

const DashboardCategories = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const itemsToShow = 6;

  const navHandler = (index: number) => {
    setCategoryIndex((p) => {
      return p + itemsToShow * index;
    });
  };
  return (
    <div className={styles["word-categories"]}>
      <h3 className={styles.title}>
        Explore by Themes: Navigate Words through Categories
      </h3>
      <div className={styles["categories-list"]}>
        {categories.map((item, index) => {
          if (index >= categoryIndex && index < categoryIndex + itemsToShow)
            return (
              <div
                className={styles.category}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(63,112,125,0.85) 30%, rgba(255,255,255,0.3) 100%), url(${item.icon})`,
                }}
                key={index}
              >
                <p>{item.name}</p>
              </div>
            );
        })}
      </div>
      <div className={styles["categories-nav"]}>
        <img
          onClick={() => (categoryIndex > 0 ? navHandler(-1) : null)}
          className={styles["left-arrow"]}
          src={arrow}
          alt="arrow"
        />
        <img
          onClick={() =>
            categoryIndex < categories.length - itemsToShow
              ? navHandler(1)
              : null
          }
          className={styles["right-arrow"]}
          src={arrow}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default DashboardCategories;
