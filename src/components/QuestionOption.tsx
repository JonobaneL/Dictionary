import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/components/QuizQuestions.module.scss";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { addUserAnswer, nextQuestion } from "../store/reducers/QuizSlice";

type OptionProps = {
  option: string;
};

const QuestionOption = ({ option }: OptionProps) => {
  const { question_index, questions } = useTypeSelector(
    (state) => state.quizReducer
  );
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();
  const optionHandler = (answer: string) => {
    dispatch(addUserAnswer(answer));
    if (question_index == questions.length - 1) {
      navigate("/quiz-results");
    } else {
      dispatch(nextQuestion());
    }
  };
  return (
    <li className={styles.option} onClick={() => optionHandler(option)}>
      {option}
    </li>
  );
};

export default QuestionOption;
