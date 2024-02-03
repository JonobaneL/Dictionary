import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import Button from "../components/UI/Button";

import { nav } from "../data/navbarMenu";
import { IconContext } from "react-icons";
import ActiveNavCircle from "../components/UI/ActiveNavCircle";
import { addQuiz } from "../firebase/quizzesAPI";

// type NavProps
// const NavLink = ({}:NavProps)=>{

// }

const TestPage = () => {
  useEffect(() => {
    // const handler = async () => {
    //   const res = await addQuiz();
    // };
    // handler();
  }, []);
  // console.log(quiz);
  //3f707d
  const [active, setActive] = useState("/dashboard");
  const [color, setColor] = useState("#fff");
  const color1 = "#fff";
  const color2 = "#3f707d";
  return (
    <div className={styles["test-page"]}>
      <h1>Lorem ipsum</h1>
      <nav className={styles.nav}>
        {nav.map((item, index) => (
          <div
            key={index}
            className={styles.link}
            onClick={() => setActive(item.link)}
          >
            <IconContext.Provider
              value={{
                color: active == item.link ? color2 : color1,
                size: "1.5rem",
              }}
            >
              {item.icon}
              {active == item.link && <ActiveNavCircle />}
            </IconContext.Provider>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default TestPage;
