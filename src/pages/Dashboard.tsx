import { useState } from "react";
import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import RandomWord from "../components/RandomWord";
import DashboardSearch from "../components/DashboardSearch";
import Button from "../components/UI/Button";

const Dashboard = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const itemsToShow = 6;
  const categories = [
    {
      name: "Food & Cooking",
      icon: "../src/assets/images/categories/food.jpg",
    },
    {
      name: "Sports & Recreation",
      icon: "../src/assets/images/categories/sport.jpg",
    },
    {
      name: "Animals & Nature",
      icon: "../src/assets/images/categories/animal.jpg",
    },
    {
      name: "Travel & Places",
      icon: "../src/assets/images/categories/travel.jpg",
    },
    {
      name: "Technology & Gadgets",
      icon: "../src/assets/images/categories/tech.jpg",
    },
    {
      name: "Health & Fitness",
      icon: "../src/assets/images/categories/health.jpg",
    },
    {
      name: "Hobbies & Interests",
      icon: "../src/assets/images/categories/hobbi.jpg",
    },
    {
      name: "Family & Relationships",
      icon: "../src/assets/images/categories/family.jpg",
    },
    {
      name: "Home & Everyday Items",
      icon: "../src/assets/images/categories/home.jpg",
    },
    {
      name: "Weather & Seasons",
      icon: "../src/assets/images/categories/weather.jpg",
    },
    {
      name: "Colors & Art",
      icon: "../src/assets/images/categories/art.jpg",
    },
    {
      name: "Clothing & Fashion",
      icon: "../src/assets/images/categories/clothes.jpg",
    },
    {
      name: "Jobs & Occupations",
      icon: "../src/assets/images/categories/job.jpg",
    },
    {
      name: "Transportation",
      icon: "../src/assets/images/categories/taxi.jpg",
    },
    {
      name: "Music & Instruments",
      icon: "../src/assets/images/categories/music.jpg",
    },
    {
      name: "School & Education",
      icon: "../src/assets/images/categories/education.jpg",
    },
    {
      name: "Colors & Shapes",
      icon: "",
    },
  ] as const;
  return (
    <div className={styles.dashboard}>
      <img className={styles.logo} src={logo} alt="logo" />

      <DashboardSearch />
      <RandomWord />
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
          <Button
            width="50%"
            onClick={() => setCategoryIndex((p) => p - itemsToShow)}
            height="3rem"
            mode="primary"
          >
            Prev
          </Button>
          <Button
            onClick={() => setCategoryIndex((p) => p + itemsToShow)}
            width="50%"
            height="3rem"
            mode="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
