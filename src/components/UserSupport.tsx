import { Link } from "react-router-dom";
import styles from "../assets/styles/components/UserSupport.module.scss";
import Accordion from "./UI/Accordion";
import Feedback from "./Feedback";

const UserSupport = () => {
  return (
    <div className={styles.support}>
      <h3 className={styles.title}>Support and Help</h3>
      <div className={styles.option}>
        <Link className={styles["option-name"]} to="/privacy-policy">
          FAQs
        </Link>
      </div>
      <div className={styles.option}>
        <Link className={styles["option-name"]} to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
      <Accordion header={<p className={styles["option-name"]}>Feedback</p>}>
        <Feedback />
      </Accordion>
    </div>
  );
};

export default UserSupport;
