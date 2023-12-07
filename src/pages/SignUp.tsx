import styles from "../assets/styles/pages/SignUp.module.scss";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import SignUpForm from "../components/SignUpForm";
import { motion } from "framer-motion";
import { routesVariants } from "../motionVariants/RoutesVariants";

const SignUp = () => {
  return (
    <IconContext.Provider value={{ size: "1.6rem", color: "#3f707d" }}>
      <motion.div
        className={styles["sign-up"]}
        initial="initial"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2 }}
        variants={routesVariants}
      >
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <SignUpForm />
          <div className={styles["log-in"]}>
            Already have an account? <Link to="/log-in">Log In</Link>
          </div>
        </div>
      </motion.div>
    </IconContext.Provider>
  );
};

export default SignUp;
