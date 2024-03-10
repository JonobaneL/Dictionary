export type UserDetails = {
  id: string | null;
  name: string;
  email: string | null;
  quizzes: string[];
  puzzles: string[];
  words: string[];
  emailVerified: boolean;
};
