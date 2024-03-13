import { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/pages/TestPage.module.scss";

const TestPage = () => {
  return (
    <div className={styles["test-page"]}>
      <h1>Test Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque
        numquam obcaecati molestias. Autem fugiat iure perspiciatis, voluptate
        atque reiciendis recusandae voluptas laboriosam, aut porro molestias eum
        quos vel quaerat.
      </p>
      <br />
    </div>
  );
};

export default TestPage;
