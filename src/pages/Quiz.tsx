import { useParams } from "react-router-dom";
import styles from "../assets/styles/pages/Quiz.module.scss";
import Logo from "../components/UI/Logo";
import { useAsync } from "../hooks/useAsync";
import { getQuiz } from "../firebase/quizzesAPI";
import Loader from "../components/UI/Loader";
import { QuizType } from "../models/QuizTypes";
import QuizQuestions from "../components/QuizQuestions";
import QuizProgress from "../components/QuizProgress";

const Quiz = () => {
  const { quizID } = useParams();
  const [isLoading, _, quiz] = useAsync<QuizType>(
    () => getQuiz(quizID),
    [],
    "firebase"
  );
  return (
    <div className={styles.quiz}>
      <Logo />
      {isLoading ? (
        <Loader type="small" />
      ) : (
        <>
          <h2 className={styles["quiz-name"]}>{quiz?.name}</h2>
          <QuizProgress
            size={quiz?.questions.length || 0}
            //I can't get why it isn't rigth
            answers={quiz?.answers || []}
          />
          <QuizQuestions
            questions={quiz?.questions || []}
            quizName={quiz?.name || ""}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
