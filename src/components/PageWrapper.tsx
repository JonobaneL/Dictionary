import { ReactNode } from "react";
import styles from "../assets/styles/components/PageWrapper.module.scss";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { checkRoute } from "../data/specialRoutes";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      {checkRoute(location.pathname) ? null : <Navbar />}
    </div>
  );
};

export default PageWrapper;
