import { Outlet, useParams } from "react-router-dom";
import styles from "../assets/styles/pages/WordDetails.module.scss";
import { FaRegStar } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";
import Tabs from "../components/UI/Tabs";

const TabActiveLine = () => {
  return (
    <motion.div className={styles["active-line"]} layoutId="tabActiveLine" />
  );
};

const WordDetails = () => {
  const { word } = useParams();
  console.log(word);
  const [activeTab, setActive] = useState(0);
  const tabs = ["Definitions", "Thesaurus", "Exmples"];
  const tabs1 = [
    {
      title: "Definitions",
      link: "definitions",
    },
    {
      title: "Thesaurus",
      link: "thesaurus",
    },
    {
      title: "Exmples",
      link: "exmples",
    },
  ];
  return (
    <div className={styles["word-details"]}>
      <div className={styles["word-section"]}>
        <div className={styles.word}>
          <h1>Evidence</h1>
          <p>[ ˈɛvəɾəns ]</p>
        </div>
        <div className={styles["word-nav"]}>
          <HiMiniSpeakerWave size="1.5rem" color="#fcf9f8" />
          <FaRegStar size="1.4rem" color="#fcf9f8" />
        </div>
      </div>
      <div style={{ paddingInline: "1.3rem" }}>
        <Tabs tabs={tabs1}>
          <Outlet />
        </Tabs>
      </div>
    </div>
  );
};

export default WordDetails;
