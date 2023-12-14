import axios from "axios";
import { useAsync } from "../hooks/useAsync";

const rootLink = "https://api.dictionaryapi.dev/api/v2/entries/en/";

type Phonetic = {
  text: string;
  audio: string;
};
type Definition = {
  definition: string;
  exmple?: string;
};
type Meaning = {
  partOfSpeach: string;
  definitions: Definition[];
};
type wordResponse = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};
export const getWordDetails = (word: string | undefined) => {
  const getMethod = () => {
    const requestOptions = {
      method: "GET",
      url: `${rootLink}${word}`,
    };
    if (!word) {
      return axios.request({});
    }
    return axios.request(requestOptions);
  };
  const [isLoading, _, wordDetails] = useAsync<wordResponse>(
    getMethod,
    [],
    "standart"
  );
  return { isLoading, wordDetails };
};
