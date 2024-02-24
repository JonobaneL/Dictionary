import { PiMedal, PiPuzzlePiece } from "react-icons/pi";
import styles from "../assets/styles/components/UserAchievements.module.scss";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";

const UserAchievements = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  return (
    <>
      <div className={styles["words-progress"]}>
        <h3>Words Learned:{user?.words?.length}</h3>
      </div>
      <div className={styles.completed}>
        <h3>Quizzes Completed</h3>
        <ul className={styles.progress}>
          {user?.quizzes?.map((item) => (
            <li key={item}>
              <PiMedal size="2rem" color="#54a68d" />
            </li>
          ))}
        </ul>
        {user?.quizzes.length === 0 && <p>You didn't complete any quizzes</p>}
      </div>
      <div className={styles.completed}>
        <h3>Words Puzzles Completed</h3>
        <ul className={styles.progress}>
          {user?.puzzles?.map((item) => (
            <li key={item}>
              <PiPuzzlePiece size="2rem" color="#54a68d" />
            </li>
          ))}
        </ul>
        {user?.puzzles.length === 0 && <p>You didn't complete any puzzles</p>}
      </div>
    </>
  );
};

export default UserAchievements;
