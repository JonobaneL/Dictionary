import { motion } from "framer-motion";

const ActiveTabLine = () => {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: 0,
        left: "7%",
        right: "7%",
        height: "2px",
        background: "#54a68d",
        borderRadius: "1px",
      }}
      layoutId="activeTabLine"
    />
  );
};

export default ActiveTabLine;
