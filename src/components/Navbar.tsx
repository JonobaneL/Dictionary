import styles from "../assets/styles/components/Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import ActiveNavCircle from "./UI/ActiveNavCircle";
import { nav } from "../data/navbarMenu";

const Navbar = () => {
  const iconColor = "#fcf9f8";
  const iconActiveColor = "#3f707d";
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        {nav.map((item, index) => (
          <NavLink key={index} to={item.link} className={styles.link}>
            {({ isActive }) => (
              <>
                <IconContext.Provider
                  value={{
                    color: iconColor,
                    size: "1.5rem",
                  }}
                >
                  {item.icon}
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: iconActiveColor,
                    size: "1.5rem",
                  }}
                >
                  {isActive && <ActiveNavCircle icon={item.icon} />}
                </IconContext.Provider>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
