import { useParams } from "react-router-dom";
import styles from "../assets/styles/pages/SearchResults.module.scss";
import { useSearchWord } from "../hooks/useSearchWord";
import Logo from "../components/UI/Logo";
import WordsList from "../components/UI/WordsList";
import Loader from "../components/UI/Loader";

const SearchResults = () => {
  const { request } = useParams();
  const { isLoading, words } = useSearchWord(request || "", "50");

  return (
    <div className={styles["search-results"]}>
      <Logo />
      <h2 className={styles.title}>Results for "{request}"</h2>
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <WordsList words={words?.data || null} />
      )}
    </div>
  );
};

export default SearchResults;
