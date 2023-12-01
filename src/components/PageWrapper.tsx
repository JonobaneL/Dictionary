import { ReactNode } from "react";
import styles from "../assets/styles/components/PageWrapper.module.scss";
import home from "../assets/images/navbar/home.svg";
import bell from "../assets/images/navbar/bell.svg";
import quiz from "../assets/images/navbar/quiz.svg";
import user from "../assets/images/navbar/user.svg";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <div className={styles.navbar}>
        {/* <div className={styles["navbar-content"]}>
          <div className={styles.nav}>
            <img src={home} alt="Home" />
          </div>
          <div className={styles.nav}>
            <img src={quiz} alt="Quizzes" />
          </div>
          <div className={styles.nav}>
            <img src={bell} alt="Remind" />
          </div>
          <div className={styles.nav}>
            <img src={user} alt="User" />
          </div>
        </div> */}
        <div className={styles["navbar-content-rounded"]}>
          <div className={`${styles.nav} ${styles.active}`}>
            <img src={home} alt="Home" />
          </div>
          <div className={styles.nav}>
            <img src={quiz} alt="Quizzes" />
          </div>
          <div className={styles.nav}>
            <img src={bell} alt="Remind" />
          </div>
          <div className={styles.nav}>
            <img src={user} alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
