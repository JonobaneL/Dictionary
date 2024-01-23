import { CgOptions } from "react-icons/cg";
import styles from "../assets/styles/pages/Quizzes.module.scss";
import Logo from "../components/UI/Logo";

const quizzes = [
  `The Word Of The Day Weekly Quiz: Basically Bespoke!`,
  `New Year's Resolution: Take The Synonym Of The Day Quiz!`,
  `Immaculate Vibes: The Word Of The Day Quiz!`,
  `Go For A Gelt-Worthy Win In Our Hanukkah Quiz!`,
  `Wander The Wintry World Of Holiday Characters With Our Quiz!`,
  `Show You Know The Seven Principles With Our Kwanzaa Quiz Extravaganza`,
  `POV: You're Taking The Word Of The Day Quiz And It Rocks!`,
  `You Won't Say "Bah, Humbug!" To Our Holiday Movie Quiz`,
  `Blitzen Your Way Through This Quiz On Santa's Reindeer`,
  `Word Wiz? Wunderkind? You'll Win The Word Of The Day Quiz!`,
  `Show Off Your Knowledge Of Noshin' With Our Hanukkah Food Quiz`,
  `This Is No Soi-Disant Word Of The Day Quiz!`,
];

const Quizzes = () => {
  return (
    <div className={styles.quizzes}>
      <Logo />
      <p className={styles.title}>
        Discover, Learn, and Challenge Yourself: Explore Our Exciting Quizzes
        Across Various Topics!
      </p>
      <div className={styles.categories}>
        <button>
          <CgOptions size="1.3rem" color="#3f707d" />
          <p>Categories</p>
        </button>
      </div>
      <div className={styles["quizzes-list"]}>
        <h4 className={styles["quizzes-title"]}>All Quizzes</h4>
        <ul className={styles.list}>
          {quizzes.map((item, index) => (
            <li className={styles.quiz} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quizzes;
