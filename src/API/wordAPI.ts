import axios from "axios";
import { useAsync } from "../hooks/useAsync";
import {
  AntonymsResponse,
  ExamplesResponse,
  Response,
  SynonymsResponse,
} from "../models/WordTypes";

type optionsProps = {
  method: string;
  url: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};
const rootLink = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const rootMethod = (word: string | undefined) => {
  const requestOptions = {
    method: "GET",
    url: `${rootLink}${word}`,
  };
  if (!word) {
    return axios.request({});
  }
  return axios.request(requestOptions);
};

const getMethod = async (word: string, options: optionsProps) => {
  if (word.length > 0) return await axios.request(options);
};

export const getWordDetails = (word: string | undefined) => {
  const [isLoading, _, response] = useAsync<Response>(
    () => rootMethod(word),
    [word],
    "standart"
  );
  const wordDetails = response?.data[0];
  return { isLoading, wordDetails };
};
export const getWordSynonyms = (word: string) => {
  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
    headers: {
      "X-RapidAPI-Key": "b270b28b9fmsh1d52b4fca253157p1a157cjsncc0366bf2ff3",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  const [isSynonymsLoading, _, WordSynonyms] = useAsync<SynonymsResponse>(
    () => getMethod(word, options),
    [],
    "standart"
  );
  const synonyms = WordSynonyms?.data.synonyms;
  return { isSynonymsLoading, synonyms };
};
export const getWordAntonyms = (word: string) => {
  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/antonyms",
    headers: {
      "X-RapidAPI-Key": "b270b28b9fmsh1d52b4fca253157p1a157cjsncc0366bf2ff3",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };
  const [isAntonymsLoading, _, WordSynonyms] = useAsync<AntonymsResponse>(
    () => getMethod(word, options),
    [],
    "standart"
  );
  const antonyms = WordSynonyms?.data.antonyms;
  return { isAntonymsLoading, antonyms };
};
export const getWordExamples = (word: string) => {
  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/examples`,
    headers: {
      "X-RapidAPI-Key": "b270b28b9fmsh1d52b4fca253157p1a157cjsncc0366bf2ff3",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };
  const [isLoading, _, WordExamples] = useAsync<ExamplesResponse>(
    () => getMethod(word, options),
    [],
    "standart"
  );
  const examples = WordExamples?.data.examples;
  return { isLoading, examples };
};
