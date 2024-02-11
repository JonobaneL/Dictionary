import { useCallback, useEffect, useState } from "react";
import { FirestoreDocType } from "../firebase/userAPI";
import { getQuizzes1 } from "../firebase/quizzesAPI";
import { QuizType } from "../models/QuizTypes";

type HookResponse = [boolean, Error | undefined, QuizType[]];

export const useQuizzes = (
  category: string | null,
  limit: number
): HookResponse => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);
  const [lastDoc, setLastDoc] = useState<FirestoreDocType>();
  const limitStep = 5;
  useEffect(() => {
    console.log("clear quizzes");
    setLastDoc(undefined);
    setQuizzes([]);
  }, [category]);
  // console.log(lastDoc?.id);

  const callbackMemorized = useCallback(() => {
    console.log("feching");
    setIsLoading(true);
    setError(undefined);
    // if (category !== null) setQuizzes([]);
    getQuizzes1(category, limitStep, lastDoc)
      .then((response) => {
        setLastDoc(response.docs[response.docs.length - 1]);
        return response;
      })
      .then((response) => {
        const list: QuizType[] = [];
        console.log("res = ", response.docs);
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
    console.log("fetched quizzes");
    callbackMemorized();
  }, [callbackMemorized]);
  return [isLoading, error, quizzes];
};

export const useQuizzes1 = (category:string|null)
