import { ReactNode } from "react";
import styles from "../../assets/styles/UI/Tabs.module.scss";
import { NavLink } from "react-router-dom";
import ActiveTabLine from "./ActiveTabLine";
import { motion } from "framer-motion";

type Tab = {
  title: string;
  link: string;
};
type TabsProps = {
  tabs: Tab[];
  children: ReactNode;
};

const Tabs = ({ tabs, children }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      <motion.nav layout className={styles["tabs-nav"]}>
        {tabs.map((item, index) => (
          <NavLink key={index} className={styles.tab} to={item.link}>
            {({ isActive }) => (
              <span className={styles.link}>
                {item.title}
                {isActive && <ActiveTabLine />}
              </span>
            )}
          </NavLink>
        ))}
      </motion.nav>
      <div className={styles["tab-content"]}>{children}</div>
    </div>
  );
};

export default Tabs;
