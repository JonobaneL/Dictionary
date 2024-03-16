import axios from "axios";
import { useAsync } from "./useAsync";
import { WordsResponse } from "../models/SearchedWordsTypes";

export const useSearchWord = (request: string, limit: string = "10") => {
  const getWordsResponse = async () => {
    const options = {
      method: "GET",
      url: "https://wordsapiv1.p.rapidapi.com/words/",
      params: {
        letterPattern: `^${request}`,
        limit: limit,
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "b270b28b9fmsh1d52b4fca253157p1a157cjsncc0366bf2ff3",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };
    if (request.length > 0) {
      console.log("request were made", Date.now());
      return axios.request(options);
    }
  };
  const [isLoading, _, wordsResponse] = useAsync<WordsResponse>(
    getWordsResponse,
    [request],
    "standart"
  );
  const words = wordsResponse?.data.results;
  return { isLoading, words };
};
