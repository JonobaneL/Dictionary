import { useEffect } from "react";
import styles from "../../assets/styles/UI/Notification.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ReactDom from "react-dom";

type NotificationProps = {
  notification: string | null;
  handler: React.Dispatch<React.SetStateAction<string | null>>;
  closeTime?: number;
};

const Notification = ({
  notification,
  handler,
  closeTime = 2,
}: NotificationProps) => {
  useEffect(() => {
    const time = setTimeout(() => {
      handler(null);
    }, closeTime * 1000);
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
            <p className={styles.content}>{notification}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("notification")!
  );
};

export default Notification;
