import styles from "../../assets/styles/UI/FullPageModal.module.scss";
import ReactDom from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { routesVariants } from "../../motionVariants/RoutesVariants";

type ModalProps = {
  status: boolean;
  children: React.ReactNode;
};

const FullPageModal = ({ status, children }: ModalProps) => {
  return ReactDom.createPortal(
    <AnimatePresence initial={false}>
      {status && (
        <motion.div className={styles.wrapper}>
          <motion.div
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            variants={routesVariants}
            className={styles.modal}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("fullPageModal")!
  );
};

export default FullPageModal;
