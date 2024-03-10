import { useEffect, useState } from "react";
import {
  getCategoryVocabulary,
  getLevelVocabulary,
} from "../firebase/vocabularyAPI";

type Word = {
  word: string;
  level: string;
  partOfSpeech: string;
  category?: string;
};
export const useVocabulary = (
  level: string | null,
  category: string | null,
  partOfSpeech: string | null
): [boolean, Word[]] => {
  const [words, setWords] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const callback = async () => {
    setIsLoading(true);
    setWords([]);
    try {
      if (level) {
        const res = await getLevelVocabulary(
          level.toLocaleLowerCase(),
          partOfSpeech
        );
        res.forEach((item) => {
          const i = item.data() as Word;
          setWords((p) => [...p, i]);
        });
        setIsLoading(false);
        return;
      }
      const res = await getCategoryVocabulary(category, partOfSpeech);
      res.forEach((table) => {
        table.forEach((item) => {
          const i = item.data() as Word;
          setWords((p) => [...p, i]);
        });
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callback();
  }, [partOfSpeech]);
  return [isLoading, words];
};
