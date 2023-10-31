import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  TextField,
} from "@mui/material";
import user from "../../images/user.svg";
import showIcon from "../../images/passwordField/show.svg";
import hideIcon from "../../images/passwordField/hide.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../images/logo.svg";
import styles from "./LogIn.module.scss";
import { useState } from "react";
import EmailInput from "../../components/EmailInput/EmailInput";

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
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  return (
    <div className={styles["log-in"]}>
      <ThemeProvider theme={mainTheme}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt="" />

          <EmailInput />
          <FormControl className={styles["input-control"]}>
            <InputLabel className={styles["input-lable"]} htmlFor="password">
              Password
            </InputLabel>
            <Input
              className={styles["input"]}
              required
              size="small"
              id="password"
              type={isPasswordHidden ? "password" : "text"}
              endAdornment={
                <InputAdornment position="start">
                  {isPasswordHidden ? (
                    <img
                      onClick={() => setIsPasswordHidden(false)}
                      style={{ width: "25px", cursor: "pointer" }}
                      src={showIcon}
                      alt="show password"
                    />
                  ) : (
                    <img
                      onClick={() => setIsPasswordHidden(true)}
                      style={{ width: "25px", cursor: "pointer" }}
                      src={hideIcon}
                      alt="show password"
                    />
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
          <div className={styles["password-forgot"]}>
            <a>Forgot password?</a>
          </div>
          <Button className={styles.btn} variant="contained">
            Log in
          </Button>
          <div className={styles["sign-up"]}>
            <p>Don’t have an account?</p>
            <Button className={styles["sign-up__button"]} variant="text">
              Sign up now
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default LogIn;
