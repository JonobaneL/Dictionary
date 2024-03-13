import styles from "../assets/styles/pages/Remind.module.scss";
import { motion } from "framer-motion";
import Logo from "../components/UI/Logo";
import { routesVariants } from "../motionVariants/RoutesVariants";

const Remind = () => {
  return (
    <motion.div
      className={styles.remind}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <Logo />
      <h1>Coming soon...</h1>
    </motion.div>
  );
};

export default Remind;
