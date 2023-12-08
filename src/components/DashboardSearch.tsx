import styles from "../assets/styles/components/DashboardSearch.module.scss";
import React, { useState } from "react";
import SearchField from "./SearchField";

type DashboardSearchProps = {
  setSearchStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardSearch = ({ setSearchStatus }: DashboardSearchProps) => {
  const [request, setRequest] = useState("");
  return (
    <div className={styles["dashboard-search"]}>
      <h3>Journey Through Language: Find, Understand, and Learn</h3>
      <SearchField
        value={request}
        onChange={setRequest}
        setSearchStatus={setSearchStatus}
      />
    </div>
  );
};

export default DashboardSearch;
