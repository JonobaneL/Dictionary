import styles from "../assets/styles/components/QuizzesCategories.module.scss";
import { CgOptions } from "react-icons/cg";
import ModalWindow from "./UI/ModalWindow";
import { useState } from "react";
import { useAsync } from "../hooks/useAsync";
import { getQuizzesCategories } from "../firebase/quizzesAPI";
import Loader from "./UI/Loader";
import CategoriesList from "./CategoriesList";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { clearQuizzes } from "../store/reducers/QuizzesSlice";
import { useSearchParams } from "react-router-dom";

type Category = {
  id: string;
  name: string;
};

const QuizzesCategories = () => {
  const [isFilterOpen, setIsOpen] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const category = searchParam.get("category");
  const [isLoading, _, categories] = useAsync<Category[]>(
    getQuizzesCategories,
    [],
    "firebase"
  );
  const dispatch = useTypeDispatch();
  const showAllHandler = () => {
    dispatch(clearQuizzes());
    setSearchParams(undefined);
  };
  return (
    <div className={styles.categories}>
      {category != undefined && (
        <button className={styles.clear} onClick={showAllHandler}>
          Show All
        </button>
      )}
      <button onClick={() => setIsOpen(true)}>
        <CgOptions size="1.3rem" color="#3f707d" />
        <p>Categories</p>
      </button>
      <ModalWindow
        onChange={setIsOpen}
        status={isFilterOpen}
        title="Categories"
      >
        {isLoading ? (
          <Loader type="small" />
        ) : (
          <CategoriesList categories={categories} />
        )}
      </ModalWindow>
    </div>
  );
};

export default QuizzesCategories;
