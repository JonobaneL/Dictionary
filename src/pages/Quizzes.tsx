import styles from "../assets/styles/pages/Quizzes.module.scss";
import Logo from "../components/UI/Logo";
import QuizzesCategories from "../components/QuizzesCategories";
import QuizzesList from "../components/QuizzesList";
import Loader from "../components/UI/Loader";
import { useEffect } from "react";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { fetchQuizzes, clearQuizzes } from "../store/reducers/QuizzesSlice";
import { useSearchParams } from "react-router-dom";
import ShowMoreBtn from "../components/ShowMoreBtn";
import { motion } from "framer-motion";
import { routesVariants } from "../motionVariants/RoutesVariants";

const Quizzes = () => {
  const dispatch = useTypeDispatch();
  const { limit, quizzes, isLoading } = useTypeSelector(
    (state) => state.quizzesReducer
  );
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  useEffect(() => {
    dispatch(clearQuizzes());
    dispatch(fetchQuizzes(category));
  }, [category]);
  return (
    <motion.div
      className={styles.quizzes}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
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
      {quizzes.length == limit && <ShowMoreBtn category={category} />}
    </motion.div>
  );
};

export default Quizzes;
