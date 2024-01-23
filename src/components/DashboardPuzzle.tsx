import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/DashboardPuzzle.module.scss";
import Button from "./UI/Button";

const DashboardPuzzle = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.puzzle}>
      <h3 className={styles.title}>Elevate Your Vocabulary!</h3>
      <p>
        Dive into the World of Words. Challenge Yourself, Learn New Words, and
        Have Fun Along the Way.
      </p>
      <div className={styles.question}>
        <h4>Ready to Play?</h4>
        <Button
          mode="primary"
          width="8rem"
          height="2.4rem"
          onClick={() => navigate("/word-puzzle")}
        >
          Yes, I am
        </Button>
      </div>
    </div>
  );
};

export default DashboardPuzzle;
