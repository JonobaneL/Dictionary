import { ReactNode } from "react";
import styles from "../assets/styles/components/PageWrapper.module.scss";
import Navbar from "./Navbar";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  const iconColor = "#fff";
  const iconActiveColor = "#3f707d";
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      {/* <div className={styles.navbar}>
        <div className={styles["nav-list"]}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              [isActive ? styles.active : "", styles.nav].join(" ")
            }
          >
            {({ isActive }) => (
              <RiHome5Line
                size="1.5rem"
                color={isActive ? iconActiveColor : iconColor}
              />
            )}
          </NavLink>
          <NavLink
            to="/quizzes"
            className={({ isActive }) =>
              [isActive ? styles.active : "", styles.nav].join(" ")
            }
          >
            {({ isActive }) => (
              <RiFileList2Line
                size="1.5rem"
                color={isActive ? iconActiveColor : iconColor}
              />
            )}
          </NavLink>
          <NavLink
            to="/remind"
            className={({ isActive }) =>
              [isActive ? styles.active : "", styles.nav].join(" ")
            }
          >
            {({ isActive }) => (
              <LuBell
                size="1.5rem"
                color={isActive ? iconActiveColor : iconColor}
              />
            )}
          </NavLink>
          <NavLink
            to="/user-info"
            className={({ isActive }) =>
              [isActive ? styles.active : "", styles.nav].join(" ")
            }
          >
            {({ isActive }) => (
              <LuUser
                size="1.5rem"
                color={isActive ? iconActiveColor : iconColor}
              />
            )}
          </NavLink>
        </div>
      </div> */}
      <Navbar />
    </div>
  );
};

export default PageWrapper;
