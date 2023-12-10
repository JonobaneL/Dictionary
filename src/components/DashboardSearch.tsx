import styles from "../assets/styles/components/DashboardSearch.module.scss";
import React, { useState } from "react";
import SearchField from "./SearchField";
import { useSearchWord } from "../hooks/useSearchWord";
import { useReques } from "../hooks/useRequest";
import { AnimatePresence } from "framer-motion";
import WordSearchResults from "./WordSearchResults";

type DashboardSearchProps = {
  searchStatus: boolean;
  setSearchStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardSearch = ({
  searchStatus,
  setSearchStatus,
}: DashboardSearchProps) => {
  const [query, setQuery] = useState("");
  const request = useReques(query);
  const { isLoading, words } = useSearchWord(request);
  console.log(words);
  return (
    <div className={styles["dashboard-search"]}>
      <h3>Journey Through Language: Find, Understand, and Learn</h3>
      <SearchField
        value={query}
        onChange={setQuery}
        setSearchStatus={setSearchStatus}
      />
      <AnimatePresence mode="sync">
        {searchStatus && (
          <WordSearchResults isLoading={isLoading} words={words} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardSearch;
