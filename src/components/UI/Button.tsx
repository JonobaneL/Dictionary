import React from "react";
import styles from "../../assets/styles/UI/Button.module.scss";

type ButtonProps = {
  mode: "primary" | "secondary";
  width?: string;
  height?: string;
  align?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({
  mode,
  height,
  width,
  align = "left",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        height: height,
        width: width,
        justifySelf: align,
        margin: `${align == "center" ? "0 auto" : "0"}`,
      }}
      className={`${styles.button} ${styles[mode]}`}
    >
      {children}
    </button>
  );
};

export default Button;
