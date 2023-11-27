import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import RandomWord from "../components/RandomWord";
import DashboardSearch from "../components/DashboardSearch";
import food from "../assets/images/categories/food.svg";
import sport from "../assets/images/categories/sport.svg";
import animal from "../assets/images/categories/animal.svg";

const Dashboard = () => {
  const categories = [
    {
      name: "Food and Cooking",
      icon: food,
    },
    {
      name: "Sports and Recreation",
      icon: sport,
    },
    {
      name: "Animals and Nature",
      icon: animal,
    },
    {
      name: "Travel and Places",
      icon: "",
    },
    {
      name: "Technology and Gadgets",
      icon: "",
    },
    {
      name: "Health and Fitness",
      icon: "",
    },
    {
      name: "Hobbies and Interests",
      icon: "",
    },
    {
      name: "Family and Relationships",
      icon: "",
    },
    {
      name: "Home and Everyday Items",
      icon: "",
    },
    {
      name: "Weather and Seasons",
      icon: "",
    },
    {
      name: "Colors and Art",
      icon: "",
    },
    {
      name: "Numbers and Mathematics",
      icon: "",
    },
    {
      name: "Clothing and Fashion",
      icon: "",
    },
    {
      name: "Jobs and Occupations",
      icon: "",
    },
    {
      name: "Transportation",
      icon: "",
    },
    {
      name: "Music and Instruments",
      icon: "",
    },
    {
      name: "Movies and Entertainment",
      icon: "",
    },
    {
      name: "School and Education",
      icon: "",
    },
    {
      name: "Celebrations and Holidays",
      icon: "",
    },
    {
      name: "Colors and Shapes",
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
          {/* <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div>
          <div className={styles.category}></div> */}
          {categories.map((item, index) => (
            <div className={styles.category} key={index}>
              <img src={item.icon} alt={item.name} />
              {/* <p>{item.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
