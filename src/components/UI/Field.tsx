import React, { ReactNode } from "react";
import styles from "../../assets/styles/UI/Field.module.scss";

type FieldProps = {
  fieldIcon: ReactNode;
} & React.ComponentPropsWithRef<"input">;

const Field = ({ fieldIcon, ...props }: FieldProps) => {
  return (
    <div className={styles.field}>
      <div className={styles.icon}>{fieldIcon}</div>
      <input type="text" {...props} />
    </div>
  );
};

export default Field;
