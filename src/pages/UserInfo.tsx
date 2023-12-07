import Button from "../components/UI/Button";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { signOutUser } from "../store/reducers/userSlice";
import { motion } from "framer-motion";

const UserInfo = () => {
  const dispatch = useTypeDispatch();

  const { user } = useTypeSelector((state) => state.userReducer);
  const logOutHandler = () => {
    dispatch(signOutUser());
  };
  return (
    <motion.div
      style={{ padding: "2rem" }}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <p>{user.email}</p>
      <p>{user.uid}</p>
      <Button mode="secondary" onClick={() => logOutHandler()}>
        Log Out
      </Button>
    </motion.div>
  );
};

export default UserInfo;
