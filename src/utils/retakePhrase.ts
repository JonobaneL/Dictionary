import { congratulationPhrases, failPhrases } from "../data/phrases";

type TypeProps = "quiz" | "puzzle";

export const retakePhrase = (
  progress: number,
  maxValue: number,
  type: TypeProps
) => {
  const phraseIndex = Math.floor(Math.random() * 5);
  if (progress == 0) return `We think there's a 100% in your future`;
  if (progress >= maxValue) {
    return congratulationPhrases[type][phraseIndex];
  }
  return failPhrases[type][phraseIndex];
};
