import { useEffect, useState } from "react";
import { WordProps } from "../models/RandomWordProps";

export const getRandomWord = () => {
  const [randomWord, setRandomWord] = useState<WordProps | null>(null);
  const getRandomWord = async () => {
    const url = "https://wordsapiv1.p.rapidapi.com/words/?random=true";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b270b28b9fmsh1d52b4fca253157p1a157cjsncc0366bf2ff3",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRandomWord(result);
    } catch (error) {
      console.error(error);
    }
  };
  //   useEffect(() => {
  //     getRandomWord();
  //   }, []);
  return randomWord;
};
