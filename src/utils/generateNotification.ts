import {
  correctMessage,
  foundedMessage,
  notInListMessage,
} from "../data/notificationMessages";

export const generateNotification = (
  words: string[] | null,
  progress: string[],
  word: string
) => {
  const wordExist = words?.includes(word);
  const progressExist = progress.includes(word);
  const notificationMessage = progressExist
    ? foundedMessage
    : !wordExist
    ? notInListMessage
    : correctMessage;
  return notificationMessage;
};
