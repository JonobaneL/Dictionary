import styles from "../../assets/styles/UI/ProgressBar.module.scss";

type ProgressProps = {
  maxValue: number;
  progress: number;
};

const ProgressBar = ({ maxValue, progress }: ProgressProps) => {
  const currentProgress =
    progress <= maxValue ? (progress / maxValue) * 100 : 100;
  return (
    <div className={styles.progress}>
      <div
        className={styles.indicator}
        style={{
          width: `${currentProgress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
