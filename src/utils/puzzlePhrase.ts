const congratulationPhrases = [
  "Congratulations! You're a word wizard! You guessed them all correctly!",
  "Wow, you nailed it! Perfect score! Congratulations on guessing all the words!",
  "Incredible! You aced the guessing game! Congratulations on getting every word right!",
  "Bravo! You're a guessing genius! Every word spot-on. Congratulations!",
  "Hats off to you! Perfect score, you guessed all the words correctly. Well done!",
] as const;
const failPhrases = [
  "Good effort! You were close on many words. Keep going, and you'll get them next time!",
  "Nice try! You got some right, and that's progress. Keep practicing, and you'll improve even more!",
  "Well done on the ones you guessed correctly! Don't worry about the rest – each attempt is a step toward mastery.",
  "Great attempt! You're making strides, and with a bit more practice, you'll conquer all the words.",
  "Not bad at all! You got some right, and that's commendable. Keep honing those guessing skills!",
] as const;

export const puzzlePhrase = (progress: string[], puzzleLevel: number) => {
  const phraseIndex = Math.floor(Math.random() * 5);
  if (progress.length == 0) return `We think there's a 100% in your future`;
  if (progress.length >= puzzleLevel) {
    return congratulationPhrases[phraseIndex];
  }
  return failPhrases[phraseIndex];
};
