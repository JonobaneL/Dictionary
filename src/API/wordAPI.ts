import axios from "axios";
import { useAsync } from "../hooks/useAsync";

const rootLink = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const rootMetiod = (word: string | undefined) => {
  const requestOptions = {
    method: "GET",
    url: `${rootLink}${word}`,
  };
  if (!word) {
    return axios.request({});
  }
  return axios.request(requestOptions);
};

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
type WordResponse = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};
type Response = {
  data: WordResponse[];
};
export const getWordDetails = (word: string | undefined) => {
  const [isLoading, _, response] = useAsync<Response>(
    () => rootMetiod(word),
    [word],
    "standart"
  );
  const wordDetails = response?.data[0];
  return { isLoading, wordDetails };
};
// export const getWord = (word: string | undefined) => {
//   const [isLoading, _, response] = useAsync<Response>(
//     () => rootMetiod(word),
//     [],
//     "standart"
//   );
//   const wordDetails = {
//     word: response?.data[0].word,
//     phonetic: response?.data[0]?.phonetic,
//     phonetics: response?.data[0]?.phonetics,
//     audio: response?.data[0].phonetics[0].audio,
//   } as const;
//   return { isLoading, wordDetails };
// };
