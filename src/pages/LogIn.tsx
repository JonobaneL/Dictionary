import logo from "../assets/images/logo.svg";
import styles from "../assets/styles/pages/LogIn.module.scss";
import LogInForm from "../components/LogInForm";

const LogIn = () => {
  return (
    <div className={styles["log-in"]}>
      <img className={styles.logo} src={logo} alt="" />
      <LogInForm />
      <div className={styles["sign-up"]}>
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default LogIn;
