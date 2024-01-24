import styles from "../assets/styles/components/CategoriesList.module.scss";
type Category = {
  id: string;
  name: string;
};
type ListProps = {
  categories: Category[] | undefined;
};
const CategoriesList = ({ categories }: ListProps) => {
  return (
    <ul className={styles.categories}>
      {categories?.map((item) => (
        <li key={item.id} className={styles.category}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
