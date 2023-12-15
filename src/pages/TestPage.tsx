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

const TestPage = () => {
  const word = "evidence";

  return <div className={styles["test-page"]}></div>;
};

export default TestPage;
