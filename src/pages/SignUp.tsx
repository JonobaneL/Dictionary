import styles from "../assets/styles/pages/SignUp.module.scss";
import logo from "../assets/images/logo.svg";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import Field from "../components/UI/Field";
import { LuUserCircle } from "react-icons/lu";
import { CgKeyhole } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IconContext } from "react-icons";

const SignUp = () => {
  return (
    <IconContext.Provider value={{ size: "1.6rem", color: "#3f707d" }}>
      <div className={styles["sign-up"]}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <form className={styles["sign-form"]}>
            <Field fieldIcon={<LuUserCircle />} placeholder="Nickname" />
            <Field
              fieldIcon={<MdOutlineAlternateEmail />}
              placeholder="Email"
            />
            <Field fieldIcon={<CgKeyhole />} placeholder="Password" />
            <Field fieldIcon={<CgKeyhole />} placeholder="Confirm Password" />
            <div className={styles.submit}>
              <Button mode="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
          <div className={styles["log-in"]}>
            Already have an account? <Link to="/log-in">Log In</Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default SignUp;
