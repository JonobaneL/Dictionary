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
