import { useRef } from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import logo from "../../images/logo.svg";
import styles from "./LogIn.module.scss";
import EmailInput from "../../components/EmailInput/EmailInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { mainTheme } from "../../themes/mainTheme";

const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles["log-in"]}>
      <ThemeProvider theme={mainTheme}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt="" />
          <EmailInput ref={emailRef} />
          <PasswordInput ref={passwordRef} />
          <div className={styles["password-forgot"]}>
            <a>Forgot password?</a>
          </div>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() =>
              console.log(emailRef.current?.value, passwordRef.current?.value)
            }
          >
            Log in
          </Button>
          <div className={styles["sign-up"]}>
            <p>Don’t have an account?</p>
            <Button className={styles["sign-up__button"]} variant="text">
              Sign up now
            </Button>
          </div>
          {/* in progress */}
          {/* <div
            style={{ fontSize: "12px", textAlign: "center" }}
            className="language"
          >
            English
          </div> */}
          {/* ability to chane interface language */}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default LogIn;
