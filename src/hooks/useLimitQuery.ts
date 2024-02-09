import { useCallback, useEffect, useState } from "react";
import { FirestoreDocType } from "../firebase/userAPI";
import { getQuizzes1 } from "../firebase/quizzesAPI";
import { QuizType } from "../models/QuizTypes";

type HookResponse = [
  boolean,
  Error | undefined,
  QuizType[],
  FirestoreDocType[]
];

export const useQuizzes = (
  category: string | null,
  limit: number
): HookResponse => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [lastDoc, setLastDoc] = useState<FirestoreDocType>();
  const [docs, setDocs] = useState<FirestoreDocType[]>([]);
  const limitStep = 5;

  const callbackMemorized = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    if (category !== null) setQuizzes([]);
    getQuizzes1(category, limitStep, lastDoc)
      .then((response) => {
        setLastDoc(response.docs[response.docs.length - 1]);
        setDocs((p) => [...p, ...response.docs]);
        return response;
      })
      .then((response) => {
        const list: QuizType[] = [];
        response.forEach((item: FirestoreDocType) => {
          const i: any = item.data();
          const quiz: QuizType = Object.assign({ id: item.id }, i);
          list.push(quiz);
        });
        setQuizzes((p) => [...p, ...list]);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [limit, category]);
  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);
  return [isLoading, error, quizzes, docs];
};
