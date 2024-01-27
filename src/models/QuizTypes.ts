export type QuestionType = {
  question: string;
  options: string[];
};
export type QuizType = {
  id: string;
  name: string;
  category: string;
  questions: QuestionType[];
  answers: string;
};
