import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import RandomWord from "../components/RandomWord";
import DashboardSearch from "../components/DashboardSearch";
import DashboardCategories from "../components/DashboardCategories";
import DashboardLevels from "../components/DashboardLevels";
import { motion } from "framer-motion";
import { routesVariants } from "../motionVariants/RoutesVariants";

const Dashboard = () => {
  return (
    <motion.div
      className={styles.dashboard}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <img className={styles.logo} src={logo} alt="logo" />

      <DashboardSearch />
      <RandomWord />
      <DashboardCategories />
      <DashboardLevels />
    </motion.div>
  );
};

export default Dashboard;
