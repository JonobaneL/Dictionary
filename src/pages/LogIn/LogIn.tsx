import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Input,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../images/logo.svg";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#3F707D",
      },
      secondary: {
        main: "#DADFEC",
      },
    },
  });

  return (
    <div className={styles["log-in"]}>
      <ThemeProvider theme={mainTheme}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt="" />
          <FormControl>
            <InputLabel className={styles["input-lable"]} htmlFor="email">
              Email address
            </InputLabel>
            <Input
              className={styles["input"]}
              required
              size="small"
              id="email"
            />
          </FormControl>
          <FormControl>
            <InputLabel className={styles["input-lable"]} htmlFor="password">
              Password
            </InputLabel>
            <Input
              className={styles["input"]}
              required
              size="small"
              id="password"
            />
          </FormControl>
          <div className={styles["password-forgot"]}>
            <a>Forgot password?</a>
          </div>
          <Button className={styles.btn} variant="contained">
            Log in
          </Button>
          <div className={styles["sign-up"]}>
            <a>Don’t have an account?</a>
            <Button className={styles.btn} variant="text">
              Sign up now
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default LogIn;
