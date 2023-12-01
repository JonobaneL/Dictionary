import styles from "../assets/styles/components/DashboardLevels.module.scss";
const DashboardLevels = () => {
  const english_levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  return (
    <div className={styles["english-levels"]}>
      <h3 className={styles.title}>
        Discover Your English Proficiency: Journey from Beginner to Advanced
      </h3>
      <div className={styles["levels-list"]}>
        {english_levels.map((item, index) => (
          <div key={index} className={styles.level}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLevels;
