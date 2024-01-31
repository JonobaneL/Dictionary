import { useTypeSelector } from "../hooks/useTypeReduxHooks";

const QuizResults = () => {
  const { name, user_answers } = useTypeSelector((state) => state.quizReducer);
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {user_answers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizResults;
