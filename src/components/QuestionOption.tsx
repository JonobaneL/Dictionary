import styles from "../assets/styles/components/QuizQuestions.module.scss";
import { useFinishQuiz } from "../hooks/useFinishQuiz";
import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { addUserAnswer, nextQuestion } from "../store/reducers/QuizSlice";

type OptionProps = {
  option: string;
  questionsLength: number;
  quizName: string;
};

const QuestionOption = ({ option, questionsLength, quizName }: OptionProps) => {
  const { question_index } = useTypeSelector((state) => state.quizReducer);
  const dispatch = useTypeDispatch();
  const finishEvent = useFinishQuiz();
  const optionHandler = (answer: string) => {
    dispatch(addUserAnswer(answer));
    if (question_index == questionsLength - 1) {
      finishEvent(quizName);
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
