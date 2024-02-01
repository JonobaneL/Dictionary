import styles from "../assets/styles/pages/Quizzes.module.scss";
import Logo from "../components/UI/Logo";
import QuizzesCategories from "../components/QuizzesCategories";
import { useSearchParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getQuizzes } from "../firebase/quizzesAPI";
import QuizzesList from "../components/QuizzesList";
import { QuizType } from "../models/QuizTypes";
import Loader from "../components/UI/Loader";

const Quizzes = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const [isLoading, _, quizzes] = useAsync<QuizType[]>(
    () => getQuizzes(category),
    [category],
    "firebase"
  );
  console.log(quizzes);
  //add pagination to quizzes
  return (
    <div className={styles.quizzes}>
      <Logo />
      <p className={styles.title}>
        Discover, Learn, and Challenge Yourself: Explore Our Exciting Quizzes
        Across Various Topics!
      </p>
      <QuizzesCategories />
      <div className={styles["quizzes-list"]}>
        <h4 className={styles["quizzes-title"]}>
          {category == null ? "All Quizzes" : category}
        </h4>
        {isLoading ? (
          <Loader type="small" />
        ) : (
          <QuizzesList isLoading={isLoading} quizzes={quizzes} />
        )}
      </div>
    </div>
  );
};

export default Quizzes;
