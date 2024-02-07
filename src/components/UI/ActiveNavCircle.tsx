import { motion } from "framer-motion";
import React from "react";

type CircleProps = {
  icon?: React.ReactNode;
};

const ActiveNavCircle = ({ icon }: CircleProps) => {
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
        background: "#fcf9f8",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "2",
      }}
    >
      {icon}
    </motion.div>
  );
};

export default ActiveNavCircle;
