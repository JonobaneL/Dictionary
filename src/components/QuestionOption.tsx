import styles from "../assets/styles/components/QuizQuestions.module.scss";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import {
  addUserAnswer,
  finishQuiz,
  nextQuestion,
} from "../store/reducers/QuizSlice";

type OptionProps = {
  option: string;
  setResults: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuestionOption = ({ option, setResults }: OptionProps) => {
  const { question_index, questions, id } = useTypeSelector(
    (state) => state.quizReducer
  );
  const dispatch = useTypeDispatch();
  const optionHandler = (answer: string) => {
    dispatch(addUserAnswer(answer));
    dispatch(nextQuestion());
    if (question_index == questions.length - 1) {
      dispatch(finishQuiz(id || ""));
      setResults(true);
    }
  };
  return (
    <li className={styles.option} onClick={() => optionHandler(option)}>
      {option}
    </li>
  );
};

export default QuestionOption;
