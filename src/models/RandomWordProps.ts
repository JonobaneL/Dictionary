export type ResultsType = {
  definition?: string;
  hasParts?: string[];
  hasTypes?: string[];
  partOfSpeech?: string;
  synonyms?: string[];
  typeOf?: string[];
};
export type PronunciationProps = {
  all?: string;
  noun?: string;
  verb?: string;
};
export type WordProps = {
  word: string;
  results?: ResultsType[];
  pronunciation?: PronunciationProps | string;
};
