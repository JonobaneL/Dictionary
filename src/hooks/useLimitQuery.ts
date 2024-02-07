import { useCallback, useEffect, useState } from "react";
import { FirestoreDocType } from "../firebase/userAPI";
import { getQuizzes1 } from "../firebase/quizzesAPI";

type HookResponse<T> = [boolean, Error | undefined, T[]];

export const useLimitQuery = <T>(dependencies: any[] = []): HookResponse<T> => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [value, setValue] = useState<T[]>([]);
  const limitRange = 5;
  //think about hook that will get paginated data
  const callbackMemorized = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    setValue([]);
    // getQuizzes1.catch(setError).finally(() => setIsLoading(false));
  }, dependencies);
  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);
  return [isLoading, error, value];
};
