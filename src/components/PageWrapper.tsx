import { ReactNode } from "react";
import styles from "../assets/styles/components/PageWrapper.module.scss";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageWrapper;
