import styles from "../assets/styles/pages/Dashboard.module.scss";
import logo from "../assets/images/logo.svg";
import RandomWord from "../components/RandomWord";
import DashboardSearch from "../components/DashboardSearch";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <img className={styles.logo} src={logo} alt="logo" />

      <DashboardSearch />
      <RandomWord />
    </div>
  );
};

export default Dashboard;
