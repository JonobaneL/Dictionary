import styles from "../assets/styles/components/Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import ActiveNavCircle from "./UI/ActiveNavCircle";
import { nav } from "../data/navbarMenu";
// import { useState } from "react";

const Navbar = () => {
  const iconColor = "#fff";
  const iconActiveColor = "#3f707d";
  // const [color, setColor] = useState("#fff");

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        {nav.map((item, index) => (
          <NavLink key={index} to={item.link} className={styles.link}>
            {({ isActive }) => (
              <IconContext.Provider
                value={{
                  //there is issue with this colors, need to add delay to this
                  color: isActive ? iconActiveColor : iconColor,
                  size: "1.5rem",
                }}
              >
                {item.icon}
                {isActive && <ActiveNavCircle />}
              </IconContext.Provider>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
