export type QuestionType = {
  question: string;
  options: string[];
};
export type QuizType = {
  id: string;
  name: string;
  category: string;
  questions: QuestionType[];
  answers: string[];
};
export type setResultType = {
  setResults: React.Dispatch<React.SetStateAction<boolean>>;
};
export type InitialQuizProps = {
  isLoading: boolean;
  id: string | null;
  name: string;
  question_index: number;
  user_answers: string[];
  answers: string[];
  questions: QuestionType[];
  right_answers: number;
};
