import styles from "../assets/styles/pages/Quizzes.module.scss";
import Logo from "../components/UI/Logo";
import QuizzesCategories from "../components/QuizzesCategories";
import { useSearchParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getQuizzes } from "../firebase/quizzesAPI";
import QuizzesList from "../components/QuizzesList";
import { QuizType } from "../models/QuizTypes";
import Loader from "../components/UI/Loader";
import { useQuizzes } from "../hooks/useLimitQuery";
import { useState } from "react";
import Button from "../components/UI/Button";

const Quizzes = () => {
  const [searchParam] = useSearchParams();
  const [limit, setLimit] = useState(5);
  const category = searchParam.get("category");

  const [isLoading, _, quizzes] = useQuizzes(category, limit);
  console.log(quizzes.length);
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
        {<QuizzesList isLoading={isLoading} quizzes={quizzes} />}
        {isLoading && <Loader type="small" />}
      </div>
      {quizzes.length == limit && (
        <Button
          mode="secondary"
          width="60%"
          height="2.2rem"
          align="center"
          onClick={() => setLimit((p) => p + 5)}
        >
          Show More
        </Button>
      )}
    </div>
  );
};

export default Quizzes;
