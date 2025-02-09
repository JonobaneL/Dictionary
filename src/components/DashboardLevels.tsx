import styles from "../assets/styles/components/DashboardLevels.module.scss";
import { motion } from "framer-motion";
import { levelVariants } from "../motionVariants/levelVariants";
import { useNavigate } from "react-router-dom";

const DashboardLevels = () => {
  const english_levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const navigate = useNavigate();
  return (
    <div className={styles["english-levels"]}>
      <h3 className={styles.title}>
        Discover Your English Proficiency: Journey from Beginner to Advanced
      </h3>
      <div className={styles["levels-list"]}>
        {english_levels.map((item, index) => (
          <motion.div
            key={index}
            className={styles.level}
            initial="hidden"
            whileInView="visible"
            variants={levelVariants}
            viewport={{ once: true }}
            custom={index}
            onClick={() => navigate(`/vocabulary-list?level=${item}`)}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLevels;
