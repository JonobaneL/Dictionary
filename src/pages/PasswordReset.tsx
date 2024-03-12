import styles from "../assets/styles/pages/PasswordReset.module.scss";
import { LuUserCircle } from "react-icons/lu";
import Logo from "../components/UI/Logo";
import ValidatedField from "../components/UI/ValidatedField";
import { useInput } from "../hooks/useInput";
import Button from "../components/UI/Button";
import { resetUserPassword } from "../firebase/userAPI";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { addNotification } from "../store/reducers/NotificationsSlice";
import { Link, useNavigate } from "react-router-dom";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { motion } from "framer-motion";
import { checkEmailMessage } from "../data/notificationMessages";

const PasswordReset = () => {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      navigate("/log-in");
      await resetUserPassword(email.value);
      email.setValue("");
      dispatch(addNotification(checkEmailMessage));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      className={styles["password-reset"]}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <Link to="/dashboard">
        <Logo />
      </Link>
      <h2>Password Reset</h2>
      <form onSubmit={submitHandler} className={styles["reset-form"]}>
        <label className={styles.label}>
          Enter your email and we will send you a link to reset your password
        </label>
        <ValidatedField
          input={email}
          fieldIcon={<LuUserCircle size="1.5rem" color="#3f707d" />}
          placeholder="Email address"
        />
        <Button type="submit" mode="primary" width="50%" align="center">
          Send Email
        </Button>
      </form>
    </motion.div>
  );
};

export default PasswordReset;
