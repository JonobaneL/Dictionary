import { useEffect } from "react";
import styles from "../../assets/styles/UI/Notification.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ReactDom from "react-dom";
import {
  useTypeDispatch,
  useTypeSelector,
} from "../../hooks/useTypeReduxHooks";
import { removeNotification } from "../../store/reducers/NotificationsSlice";

const Notification = () => {
  const notification = useTypeSelector((state) => state.NotificationReducer);
  const dispatch = useTypeDispatch();
  // const closeTime = 2;

  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(removeNotification());
    }, notification?.time || 1 * 1000);
    return () => {
      clearTimeout(time);
    };
  }, [notification]);
  return ReactDom.createPortal(
    <AnimatePresence initial={false}>
      {notification && (
        <motion.div className={styles["notification-wrapper"]}>
          <motion.div
            className={styles.notification}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
          >
            <p className={styles.content}>{notification?.content}</p>
            <motion.div
              className={`${styles.progress} ${styles[notification.type]}`}
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: notification?.time || 1, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("notification")!
  );
};

export default Notification;
