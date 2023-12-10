type WordsResults = {
  results: {
    data: string[];
    total: number;
  };
};

export type WordsResponse = {
  data: WordsResults;
};
