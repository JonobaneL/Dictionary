import styles from "../assets/styles/pages/Home.module.scss";
import logo from "../assets/images/logo1.svg";
import searching from "../assets/images/searching.svg";
import Button from "../components/UI/Button";
import HomeAdvantages from "../components/HomeAdvantages";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles["main-section"]}>
        <img
          onClick={() => navigate("/")}
          className={styles.logo}
          src={logo}
          alt="logo"
        />
        <p className={styles.slogan}>
          Discover the Power of Words with <span>Dictionary</span>
        </p>
        <p className={styles.details}>
          Are you looking for a reliable, comprehensive, and user-friendly
          dictionary?
        </p>
        <img
          className={styles["searching-img"]}
          src={searching}
          alt="searching"
        />
        <p className={styles.details}>
          Look no further! <span>dictionary.com</span> is here to help you
          unlock the world of language.
        </p>

        <Button
          onClick={() => navigate("/dashboard")}
          mode="primary"
          width="15rem"
        >
          Get Started
        </Button>
      </div>
      <HomeAdvantages />
    </div>
  );
};

export default Home;
