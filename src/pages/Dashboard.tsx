import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import RandomWord from "../components/RandomWord";
import DashboardSearch from "../components/DashboardSearch";
import DashboardCategories from "../components/DashboardCategories";
import DashboardLevels from "../components/DashboardLevels";
import { motion } from "framer-motion";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { useState } from "react";
import { logoVariants } from "../motionVariants/logoVariants";

const Dashboard = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <motion.div
      className={styles.dashboard}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.25 }}
      variants={routesVariants}
      layout
    >
      <motion.img
        animate={isSearchActive ? "hidden" : "visible"}
        className={styles.logo}
        variants={logoVariants}
        src={logo}
        alt="logo"
      />

      <DashboardSearch
        searchStatus={isSearchActive}
        setSearchStatus={setIsSearchActive}
      />
      <RandomWord />
      <DashboardCategories />
      <DashboardLevels />
    </motion.div>
  );
};

export default Dashboard;
