import { useSearchParams } from "react-router-dom";
import styles from "../assets/styles/components/CategoriesList.module.scss";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { clearQuizzes } from "../store/reducers/QuizzesSlice";
type Category = {
  id: string;
  name: string;
};
type ListProps = {
  categories: Category[] | undefined;
};
const CategoriesList = ({ categories }: ListProps) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const category = searchParam.get("category");
  const dispatch = useTypeDispatch();
  const categoryHandler = (name: string) => {
    if (category === name) {
      setSearchParam(undefined);
      return;
    }
    dispatch(clearQuizzes());
    setSearchParam({ category: name });
  };
  return (
    <ul className={styles.categories}>
      {categories?.map((item) => (
        <li
          key={item.id}
          onClick={() => categoryHandler(item.name)}
          className={`${styles.category} ${
            category == item.name ? styles.active : ""
          }`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
