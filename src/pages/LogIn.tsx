import styles from "../assets/styles/pages/LogIn.module.scss";
import LogInForm from "../components/LogInForm";
import { motion } from "framer-motion";
import { routesVariants } from "../motionVariants/RoutesVariants";
import Logo from "../components/UI/Logo";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={styles["log-in"]}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <Logo />
      <LogInForm />
      <div className={styles["sign-up"]}>
        <p>Don't have an account?</p>
        <button onClick={() => navigate("/sign-up")}>Sign Up</button>
      </div>
    </motion.div>
  );
};

export default LogIn;
