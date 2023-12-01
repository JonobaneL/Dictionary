import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import RandomWord from "../components/RandomWord";
import DashboardSearch from "../components/DashboardSearch";
import DashboardCategories from "../components/DashboardCategories";
import DashboardLevels from "../components/DashboardLevels";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <img className={styles.logo} src={logo} alt="logo" />

      <DashboardSearch />
      <RandomWord />
      <DashboardCategories />
      <DashboardLevels />
    </div>
  );
};

export default Dashboard;
