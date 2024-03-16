import styles from "../assets/styles/components/DashboardSearch.module.scss";
import React, { useRef, useState } from "react";
import SearchField from "./SearchField";
import { useSearchWord } from "../hooks/useSearchWord";
import { useReques } from "../hooks/useRequest";
import { AnimatePresence } from "framer-motion";
import WordsSearchResult from "./WordsSearchResult";
import { useEventListener } from "../hooks/useEventListener";

type DashboardSearchProps = {
  searchStatus: boolean;
  setSearchStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardSearch = ({
  searchStatus,
  setSearchStatus,
}: DashboardSearchProps) => {
  const [query, setQuery] = useState("");
  const request = useReques(query.toLocaleLowerCase());
  const { isLoading, words } = useSearchWord(request);
  const searchRef = useRef<HTMLDivElement>(null);
  const handler = (e: Event) => {
    const condition = searchRef.current?.contains(e.target as Node);
    if (condition) {
      setSearchStatus(true);
    } else {
      setSearchStatus(false);
      setQuery("");
    }
  };
  const isSearchResultsOpen =
    searchStatus && words?.total && query && isLoading == false;
  useEventListener("click", (e) => handler(e));
  return (
    <div className={styles["dashboard-search"]}>
      <h3>Journey Through Language: Find, Understand, and Learn</h3>
      <div className={styles.search} ref={searchRef}>
        <SearchField value={query} onChange={setQuery} status={searchStatus} />
        <AnimatePresence initial={false}>
          {isSearchResultsOpen && <WordsSearchResult words={words} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DashboardSearch;
