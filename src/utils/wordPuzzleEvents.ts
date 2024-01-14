export const shuffleLetters = (
  letters: string[],
  lettersHandler: React.Dispatch<React.SetStateAction<string[]>>,
  wordsLettersHandler: React.Dispatch<React.SetStateAction<number[]>>
) => {
  wordsLettersHandler([]);
  const res = letters
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  lettersHandler(res);
};
export const checkWord = (
  word: string,
  words: string[],
  progress: string[],
  notificationHandler: React.Dispatch<React.SetStateAction<string | null>>,
  progressHandler: React.Dispatch<React.SetStateAction<string[]>>,
  wordLetters: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const wordExist = words.find((item) => item == word);
  const progressExist = progress.find((item) => item == word);
  if (progressExist) {
    notificationHandler("Already found");
  }
  if (!wordExist) {
    notificationHandler("Not on the list");
  }
  if (wordExist && !progressExist) {
    progressHandler((p) => [...p, word]);
    notificationHandler("Way to go!");
  }
  wordLetters([]);
};
