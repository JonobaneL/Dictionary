import { Link } from "react-router-dom";
import styles from "../assets/styles/components/QuizzesList.module.scss";
import { QuizType } from "../models/QuizTypes";

type ListProps = {
  isLoading: boolean;
  quizzes: QuizType[] | undefined;
};

const QuizzesList = ({ isLoading, quizzes }: ListProps) => {
  if (isLoading == false && quizzes?.length == 0)
    return (
      <p>No quizzes were found. Please check back soon for more quizzes.</p>
    );
  return (
    <ul className={styles.list}>
      {quizzes?.map((item) => (
        <li className={styles.quiz} key={item.id}>
          <Link to={`${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default QuizzesList;
