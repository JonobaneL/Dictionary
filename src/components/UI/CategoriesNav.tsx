import styles from "../../assets/styles/UI/CategoriesNav.module.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

type NavProps = {
  index: number;
  max: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
const CategoriesNav = ({ index, max, setIndex }: NavProps) => {
  const itemsToShow = 6;
  const navHandler = (index: number) => {
    setIndex((p) => p + itemsToShow * index);
  };
  return (
    <div className={styles["categories-nav"]}>
      <MdArrowBackIosNew
        size="1.3rem"
        color="#3f707d"
        className={styles.arrow}
        onClick={() => index > 6 && navHandler(-1)}
      />
      <MdArrowForwardIos
        size="1.3rem"
        color="#3f707d"
        className={styles.arrow}
        onClick={() => index < max && navHandler(1)}
      />
    </div>
  );
};

export default CategoriesNav;
