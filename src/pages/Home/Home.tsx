import styles from "./Home.module.scss";
import logo from "../../images/logo.svg";
import searching from "../../images/searching.svg";
import { Button, ThemeProvider } from "@mui/material";
import { mainTheme } from "../../themes/mainTheme";
// цю сторінку потрібно розбити

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p className={styles.slogan}>
          Discover the Power of Words with <span>Dictionary</span>
        </p>
        <p className={styles.text1}>
          Are you looking for a reliable, comprehensive, and user-friendly
          dictionary?
        </p>
        <br />
        <img style={{ width: "200px" }} src={searching} alt="searching" />
        <p className={styles.advantage2}>
          Look no further! <span>dictionary.com</span> is here to help you
          unlock the world of language.
        </p>
        <br />
        <ThemeProvider theme={mainTheme}>
          <Button className={styles.btn} variant="contained">
            Get Started
          </Button>
        </ThemeProvider>
        <div className={styles.advantages}></div>
      </div>
    </div>
  );
};

export default Home;
