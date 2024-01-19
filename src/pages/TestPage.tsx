import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

import { AnimatePresence, mix, motion, progress, wrap } from "framer-motion";
import { categories } from "../data/categories";
import Button from "../components/UI/Button";

import { TiArrowShuffle } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";
import ProgressBar from "../components/UI/ProgressBar";
import Notification from "../components/UI/Notification";
import { getAllPuzzles } from "../firebase/puzzleAPI";

type PuzzleProps = {
  puzzleID: string;
  letters: string[];
  words: string[];
};

const TestPage = () => {
  const generateRandomID = (currentID: string, completedID: string) => {
    let id = "";
    while (currentID) {}
  };
  const getPuzzleID = () => {
    const puzzles = [{ id: "1" }, { id: "2" }, { id: "3" }];
  };

  return (
    <div className={styles["test-page"]}>
      <h1>Lorem ipsum</h1>
    </div>
  );
};

export default TestPage;
