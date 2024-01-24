import styles from "../../assets/styles/UI/ModalWindow.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ReactDom from "react-dom";
import { MdClose } from "react-icons/md";
import {
  modalVariants,
  modalWrapperVariants,
} from "../../motionVariants/modalWindowVariants";

type ModalProps = {
  status: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: string;
};

const ModalWindow = ({
  status,
  onChange,
  children,
  title = "",
}: ModalProps) => {
  if (status) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
  return ReactDom.createPortal(
    <AnimatePresence initial={false}>
      {status && (
        <motion.div
          className={styles.wrapper}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalWrapperVariants}
        >
          <motion.div
            className={styles["modal-window"]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
          >
            <div className={styles.header}>
              <h3>{title}</h3>
              <button onClick={() => onChange(false)}>
                <MdClose size="1.5rem" color="#3f707d" />
              </button>
            </div>
            <div className="content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal")!
  );
};

export default ModalWindow;
