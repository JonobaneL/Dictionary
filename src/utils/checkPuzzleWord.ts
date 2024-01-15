import { useTypeDispatch, useTypeSelector } from "../hooks/useTypeReduxHooks";
import { setPuzzleProgress } from "../store/reducers/puzzleSlice";

export const notificationHandler = (
  word: string,
  notificationHandler: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const { words, progress } = useTypeSelector((state) => state.puzzleReducer);
  const wordExist = words?.find((item) => item == word);
  const progressExist = progress.find((item) => item == word);
  if (progressExist) {
    notificationHandler("Already found");
  }
  if (!wordExist) {
    notificationHandler("Not on the list");
  }
  if (wordExist && !progressExist) {
    notificationHandler("Way to go!");
  }
};
