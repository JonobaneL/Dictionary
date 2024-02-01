import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/pages/QuizResults.module.scss";
import TaskRetake from "../components/TaskRetake";
import Accordion from "../components/UI/Accordion";
import CircleProgress from "../components/UI/CircleProgress";
import Logo from "../components/UI/Logo";
import { useTypeSelector } from "../hooks/useTypeReduxHooks";
import QuizAnswers from "../components/QuizAnswers";

const QuizResults = () => {
  const { id, name, questions, right_answers } = useTypeSelector(
    (state) => state.quizReducer
  );
  const navigate = useNavigate();
  return (
    <div className={styles["quiz-results"]}>
      <Logo />
      <h2 className={styles["quiz-name"]}>{name}</h2>
      <div className={styles.progress}>
        <CircleProgress
          maxValue={questions.length}
          progress={right_answers}
          width="40%"
        />
      </div>
      <TaskRetake
        progress={right_answers}
        maxValue={questions.length}
        callback={() => navigate(`/quizzes/${id}`)}
        type="quiz"
      />
      <Accordion header={<div className={styles.answers}>Summary</div>}>
        <QuizAnswers />
      </Accordion>
    </div>
  );
};

export default QuizResults;
