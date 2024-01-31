import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuizName } from "../store/reducers/QuizSlice";

export const useFinishQuiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (name: string) => {
    navigate("/quiz-results");
    dispatch(setQuizName(name));
  };
};
