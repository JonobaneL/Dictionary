import { Link, useParams } from "react-router-dom";
import styles from "../assets/styles/pages/Quiz.module.scss";
import Logo from "../components/UI/Logo";
import Loader from "../components/UI/Loader";
import QuizQuestions from "../components/QuizQuestions";
import QuizProgress from "../components/QuizProgress";
import { useEffect, useState } from "react";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { getQuizInfo } from "../store/reducers/QuizSlice";
import { IoIosArrowBack } from "react-icons/io";
import FullPageModal from "../components/UI/FullPageModal";
import QuizResults from "../components/QuizResults";
import { routesVariants } from "../motionVariants/RoutesVariants";
import { motion } from "framer-motion";

const Quiz = () => {
  const { quizID } = useParams();
  const dispatch = useTypeDispatch();
  const { isLoading, name, questions } = useTypeSelector(
    (state) => state.quizReducer
  );
  const [results, setResults] = useState(false);
  useEffect(() => {
    dispatch(getQuizInfo(quizID));
  }, []);
  return (
    <motion.div
      className={styles.quiz}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      variants={routesVariants}
    >
      <Logo />
      <Link to="/quizzes" className={styles.back}>
        <IoIosArrowBack size="1.5rem" color="#3f707d" />
        <h4>All Quizzes</h4>
      </Link>

      {isLoading ? (
        <Loader type="small" />
      ) : (
        <>
          <h2 className={styles["quiz-name"]}>{name}</h2>
          <QuizProgress size={questions.length || 0} />
          <QuizQuestions setResults={setResults} />
        </>
      )}
      <FullPageModal status={results}>
        <QuizResults setResults={setResults} />
      </FullPageModal>
    </motion.div>
  );
};

export default Quiz;
