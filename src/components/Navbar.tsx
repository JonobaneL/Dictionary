import styles from "../assets/styles/components/Navbar.module.scss";
import { RiHome5Line } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const iconColor = "#fff";
  const iconActiveColor = "#3f707d";
  return (
    <div className={styles.navbar}>
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
    </div>
  );
};

export default Navbar;
