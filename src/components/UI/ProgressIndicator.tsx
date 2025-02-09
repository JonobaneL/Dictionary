import styles from "../../assets/styles/UI/ProgressIndicator.module.scss";
import { useTypeSelector } from "../../hooks/useTypeReduxHooks";

type IndicatorProps = {
  index: number;
};
const ProgressIndicator = ({ index }: IndicatorProps) => {
  const { question_index, user_answers, answers } = useTypeSelector(
    (state) => state.quizReducer
  );
  if (user_answers[index])
    return (
      <li
        className={`${styles.indicator} ${
          user_answers[index] == answers[index] ? styles.right : styles.wrong
        }`}
      ></li>
    );

  return (
    <li
      className={`${styles.indicator} ${
        question_index == index ? styles.active : ""
      }`}
    ></li>
  );
};

export default ProgressIndicator;
