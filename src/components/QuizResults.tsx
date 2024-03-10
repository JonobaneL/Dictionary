import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/QuizResults.module.scss";
import TaskRetake from "./TaskRetake";
import Accordion from "./UI/Accordion";
import CircleProgress from "./UI/CircleProgress";
import Logo from "./UI/Logo";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import QuizAnswers from "./QuizAnswers";
import Button from "./UI/Button";
import { clearQuizProgress } from "../store/reducers/QuizSlice";
import { setResultType } from "../models/QuizTypes";

const QuizResults = ({ setResults }: setResultType) => {
  const { name, questions, right_answers } = useTypeSelector(
    (state) => state.quizReducer
  );
  const navigate = useNavigate();
  const dispatch = useTypeDispatch();
  const quizHandler = () => {
    navigate(`/quizzes`);
  };
  const retakeHandler = () => {
    dispatch(clearQuizProgress());
    setResults(false);
  };
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
        callback={retakeHandler}
        type="quiz"
      />
      <Accordion header={<div className={styles.answers}>Summary</div>}>
        <QuizAnswers />
      </Accordion>
      <div className={styles["another-quiz"]}>
        <Button mode="secondary" onClick={quizHandler}>
          Take Another Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
