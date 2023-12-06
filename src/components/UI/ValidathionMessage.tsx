import React from "react";
import styles from "../../assets/styles/UI/ValidathionMessage.module.scss";

type ValidathionProps = {
  durty: boolean;
  validathionMessages: string[];
  children: React.ReactNode;
};

const ValidathioMessage = ({
  durty,
  validathionMessages,
  children,
}: ValidathionProps) => {
  return (
    <div className={styles["validathion-message"]}>
      {children}
      {durty && validathionMessages.length > 0 ? (
        <div className={styles.message}>
          {validathionMessages[validathionMessages.length - 1]}
        </div>
      ) : null}
    </div>
  );
};

export default ValidathioMessage;
