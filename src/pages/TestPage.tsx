import { LuAlertCircle, LuMicroscope } from "react-icons/lu";
import styles from "../assets/styles/pages/TestPage.module.scss";
import Field from "../components/UI/Field";
import { useSearchWord } from "../hooks/useSearchWord";
import { useEffect, useState } from "react";
import Button from "../components/UI/Button";
import { useReques } from "../hooks/useRequest";
import { FirestoreDocType, getUserInfo } from "../firebase/userAPI";
import { useAsync } from "../hooks/useAsync";
import axios from "axios";

type WordsResults = {
  results: {
    data: string[];
    total: number;
  };
};

type WordsRes = {
  data: WordsResults;
};
const TestPage = () => {
  const [query, setQuery] = useState("");
  const request = useReques(query);
  const [response, setResponse] = useState<FirestoreDocType>();
  // const words = useSearchWord(request);
  // const words = [false, null];
  // const words = useSearchWord("app");
  const { isLoading, words } = useSearchWord("app");
  console.log(words);
  //code to get current log-ined user, move somewhere else

  return (
    <div className={styles["test-page"]}>
      <Field
        fieldIcon={<LuMicroscope size="1.5rem" />}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button mode="primary" onClick={() => setQuery("app")}>
        app
      </Button>
      <Button mode="primary" onClick={() => setQuery("ho")}>
        ho
      </Button>
      <ul style={{ marginTop: "2rem" }}>
        {words?.data.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>{words?.total}</h3>
    </div>
  );
};

export default TestPage;
