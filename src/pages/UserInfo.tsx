import styles from "../assets/styles/pages/UserInfo.module.scss";
import Button from "../components/UI/Button";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { signOutUser } from "../store/reducers/userSlice";
import { motion } from "framer-motion";
import Loader from "../components/UI/Loader";
import UserSupport from "../components/UserSupport";
import UserAchievements from "../components/UserAchievements";
import UserSettings from "../components/UserSettings";
import VerificationMessage from "../components/UI/VerificationMessage";

const UserInfo = () => {
  const dispatch = useTypeDispatch();
  const { isLoading, user } = useTypeSelector((state) => state.userReducer);
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
      className={styles.user}
    >
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <div className={styles["user-info"]}>
          <h1 className={styles.title}>Hi {user?.name}</h1>
          <h3 className={styles.email}>{user.email}</h3>
          <p className={styles.slogan}>
            Ready to continue your learning journey? Dive into quizzes, conquer
            word puzzles, and expand your vocabulary to new heights!
          </p>
          {!user.emailVerified && <VerificationMessage />}
          <UserAchievements />
        </div>
      )}
      <UserSupport />
      <div className={styles["button-bar"]}>
        <UserSettings />
        <Button
          mode="secondary"
          width="50%"
          height="2.5rem"
          onClick={() => dispatch(signOutUser())}
        >
          Log Out
        </Button>
      </div>
    </motion.div>
  );
};

export default UserInfo;
