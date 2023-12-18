import { motion } from "framer-motion";

const ActiveNavCircle = () => {
  return (
    <motion.div
      layoutId="circle"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        width: "2.2rem",
        height: "2.2rem",
        background: "#fff",
        borderRadius: "50%",
        zIndex: "-1",
      }}
    />
  );
};

export default ActiveNavCircle;
