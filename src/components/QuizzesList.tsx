import { Link } from "react-router-dom";
import styles from "../assets/styles/components/QuizzesList.module.scss";
import { QuizType } from "../models/QuizTypes";
import { useTypeDispatch } from "../hooks/useTypeReduxHooks";
import { clearQuiz } from "../store/reducers/QuizSlice";

type ListProps = {
  isLoading: boolean;
  quizzes: QuizType[] | undefined;
};

const QuizzesList = ({ isLoading, quizzes }: ListProps) => {
  if (isLoading == false && quizzes?.length == 0)
    return (
      <p>No quizzes were found. Please check back soon for more quizzes.</p>
    );
  const dispatch = useTypeDispatch();
  const linkHandler = () => {
    dispatch(clearQuiz());
  };
  return (
    <ul className={styles.list}>
      {quizzes?.map((item) => (
        <li className={styles.quiz} key={item.id}>
          <Link to={`${item.id}`} onClick={linkHandler}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default QuizzesList;
