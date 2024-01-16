import { FaRegQuestionCircle } from "react-icons/fa";
import styles from "../assets/styles/components/PuzzleRules.module.scss";
import Accordion from "./UI/Accordion";

const PuzzleRules = () => {
  return (
    <div className={styles.rules}>
      <Accordion
        header={
          <div className={styles.head}>
            <h4>How to play?</h4>
            <button>
              <FaRegQuestionCircle size="1.3rem" color="#3f707d" />
            </button>
          </div>
        }
      >
        <ul className={styles["rules__list"]}>
          <li>Guess as many words as you can</li>
          <li>Create words by selecting the letters provided.</li>
          <li>You can use your mouse to select letters and submit words.</li>
          <li>Letters can only be used once per word.</li>
        </ul>
      </Accordion>
    </div>
  );
};

export default PuzzleRules;
