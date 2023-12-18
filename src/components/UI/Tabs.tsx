import { ReactNode, useState } from "react";
import styles from "../../assets/styles/UI/Tabs.module.scss";
import ActiveTabLine from "./ActiveTabLine";
import { AnimatePresence, motion } from "framer-motion";

type Tab = {
  title: string;
  link: string;
};
type TabsProps = {
  tabs: Tab[];
  children: ReactNode[];
};

const Tabs = ({ tabs, children }: TabsProps) => {
  const [activeTab, setActive] = useState(0);
  return (
    <div className={styles.tabs}>
      <motion.nav layout className={styles["tabs-nav"]}>
        {tabs.map((item, index) => (
          <div
            key={index}
            className={styles.tab}
            onClick={() => setActive(index)}
          >
            {item.title}
            {activeTab == index && <ActiveTabLine />}
          </div>
        ))}
      </motion.nav>
      <div className={styles["tab-content"]}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children[activeTab] || <>Empty</>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
