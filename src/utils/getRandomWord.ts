import { WordProps } from "../models/RandomWordProps";
import { useAsync } from "../hooks/useAsync";
import axios from "axios";

type RandomWord = {
  data: WordProps;
  status: number;
};

export const getRandomWord = () => {
  const getRandomWord = () => {
    const options = {
      method: "GET",
      url: "https://wordsapiv1.p.rapidapi.com/words/",
      params: { random: "true" },
      headers: {
        "X-RapidAPI-Key": "b270b28b9fmsh1d52b4fca253157p1a157cjsncc0366bf2ff3",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };
    return axios.request(options);
  };
  const [isLoading, _, res] = useAsync<RandomWord>(
    getRandomWord,
    [],
    "standart"
  );
  const randomWord = res?.data;

  return { isLoading, randomWord };
};
