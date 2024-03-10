import styles from "../assets/styles/components/PopMenu.module.scss";
import { motion } from "framer-motion";
import {
  popContentVariants,
  popMenuVariants,
} from "../motionVariants/popMenuVariants";

type MenuProps = {
  setFormType: React.Dispatch<React.SetStateAction<string>>;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopMenu = ({ setFormType, setModalStatus }: MenuProps) => {
  const options = ["nickname", "email", "password"];
  return (
    <motion.div
      className={styles["pop-menu"]}
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={popMenuVariants}
      id="pop"
      transition={{
        duration: 0.2,
      }}
    >
      <motion.p
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={popContentVariants}
        custom={3}
      >
        Change my:
      </motion.p>
      <ul className={styles.options}>
        {options.map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index + 4}
            onClick={() => {
              setFormType(item);
              setModalStatus(true);
            }}
            variants={popContentVariants}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PopMenu;
