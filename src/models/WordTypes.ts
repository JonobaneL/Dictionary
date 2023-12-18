type Phonetic = {
  text: string;
  audio: string;
};
type Definition = {
  definition: string;
  example?: string;
};
type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};
export type WordResponse = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};
export type Response = {
  data: WordResponse[];
};
export type SynonymsResponse = {
  data: {
    synonyms: string[];
  };
};
export type AntonymsResponse = {
  data: {
    antonyms: string[];
  };
};
export type ExamplesResponse = {
  data: {
    examples: string[];
  };
};
export type WordsSearchResultProps = {
  words:
    | {
        data: string[];
        total: number;
      }
    | undefined;
  state: boolean;
};
