import styles from "../../assets/styles/UI/CircleProgress.module.scss";
import { motion } from "framer-motion";
import { drawCircle } from "../../motionVariants/circleProgressVariants";

type CircleProps = {
  width: string;
  maxValue: number;
  progress: number;
};
const CircleProgress = ({ width, maxValue, progress }: CircleProps) => {
  const actualProgress = progress / maxValue;
  return (
    <div className={styles["circle-progress"]} style={{ width: width }}>
      <svg className={styles["wrapper-circle"]} viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="#dadfec" />
      </svg>
      <motion.svg
        className={styles["indicator-circle"]}
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke={progress > 0 ? "#54a68d" : "#dadfec"}
          variants={drawCircle}
          custom={actualProgress}
        />
      </motion.svg>
      <div className={styles.progress}>
        {progress}/{maxValue}
      </div>
    </div>
  );
};

export default CircleProgress;
