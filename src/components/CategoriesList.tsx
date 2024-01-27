import { useSearchParams } from "react-router-dom";
import styles from "../assets/styles/components/CategoriesList.module.scss";
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

  const categoryHandler = (name: string) => {
    setSearchParam(undefined);
    if (category === name) {
      setSearchParam(undefined);
      return;
    }
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
