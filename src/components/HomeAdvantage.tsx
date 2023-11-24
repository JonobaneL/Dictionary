import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import styles from "../assets/styles/components/HomeAdvantage.module.scss";
import arrowPrimary from "../assets/images/advantages/arrow-primary.svg";
import arrowWhite from "../assets/images/advantages/arrow-white.svg";

type advantageProps = {
  advantage: {
    img: string;
    imgWidth: string;
    title: string;
    description: string;
    type: string;
  };
};
const HomeAdvantage = ({ advantage }: advantageProps) => {
  const advantageRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(advantageRef, {});
  const isVisible = !!entry?.isIntersecting;
  return (
    <div
      ref={advantageRef}
      className={`${styles.advantage} ${isVisible ? styles.visible : ""}`}
      data-type={advantage.type}
    >
      <div className={styles.content}>
        <img
          style={{ width: advantage.imgWidth }}
          className={styles.advantage__img}
          src={advantage.img}
          alt={advantage.title}
        />
        <p className={styles.advantage__title}>{advantage.title}</p>
        <p className={styles.advantage__description}>{advantage.description}</p>
        <div className={styles["learn-more"]}>
          <p>Learn More</p>
          {advantage.type === "primary" ? (
            <img className={styles.arrow} src={arrowWhite} alt="arrow" />
          ) : (
            <img className={styles.arrow} src={arrowPrimary} alt="arrow" />
          )}
        </div>
      </div>
    </div>
  );
};
export default HomeAdvantage;
