import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  mode: "primary" | "secondary";
  width?: string;
  height?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({ mode, height, width, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{ height: height, width: width }}
      className={`${styles.button} ${styles[mode]}`}
    >
      {children}
    </button>
  );
};

export default Button;
