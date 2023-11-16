import styles from "./Home.module.scss";
import logo from "../../images/logo.svg";
import searching from "../../images/searching.svg";
import { ThemeProvider, styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { mainTheme } from "../../themes/mainTheme";
import book from "../../images/advantages/book.png";
import quiz from "../../images/advantages/quize.svg";
// цю сторінку потрібно розбити

const Dutton = styled(Button)<ButtonProps>(() => ({
  width: "fit-content",
  height: "3rem",
  padding: "0 3.2rem",
  textTransform: "capitalize",
  fontFamily: '"Barlow Condensed", sans-serif',
  fontSize: "1.25rem",
  borderRadius: "0.75rem",
  "&:hover": {
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
  },
}));

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles["main-section"]}>
          <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.slogan}>
            Discover the Power of Words with <span>Dictionary</span>
          </p>
          <p className={styles.text1}>
            Are you looking for a reliable, comprehensive, and user-friendly
            dictionary?
          </p>
          <br />
          <img style={{ width: "12.5rem" }} src={searching} alt="searching" />
          <p className={styles.advantage2}>
            Look no further! <span>dictionary.com</span> is here to help you
            unlock the world of language.
          </p>
          <ThemeProvider theme={mainTheme}>
            <Dutton variant="contained" disableElevation>
              Get Started
            </Dutton>
          </ThemeProvider>
        </div>

        <div className={styles.advantage1}>
          <div className={styles.advantage}>
            <img className={styles.advantage__img} src={quiz} alt="" />
            <p className={styles.advantage__head}>
              Challenge Your Word Wisdom with Quizzes!
            </p>
            <p className={styles.advantage__text}>
              Here, we believe in making language learning not only informative
              but also fun and interactive. That's why we've introduced an
              exciting new feature: Word Quizzes!
            </p>
          </div>
        </div>
        <div className={styles.advantage2}>
          <div className={styles.advantage}>
            <img className={styles.advantage__img} src={quiz} alt="" />
            <p className={styles.advantage__head}>
              Challenge Your Word Wisdom with Quizzes!
            </p>
            <p className={styles.advantage__text}>
              Here, we believe in making language learning not only informative
              but also fun and interactive. That's why we've introduced an
              exciting new feature: Word Quizzes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
