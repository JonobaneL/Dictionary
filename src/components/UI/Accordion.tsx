import React, { useState } from "react";
import styles from "../../assets/styles/UI/Accordion.module.scss";
import { motion } from "framer-motion";

type AccordionProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const Accordion = ({ header, children }: AccordionProps) => {
  const [isOpened, setOpened] = useState(false);
  return (
    <div className={styles.accordion}>
      <div className={styles.head} onClick={() => setOpened((p) => !p)}>
        {header}
      </div>
      <motion.div
        className={styles["body-wrapper"]}
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={
          !isOpened
            ? {
                height: 0,
                opacity: 0,
              }
            : {
                height: "fit-content",
                opacity: 1,
              }
        }
      >
        <div className={styles.body}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
