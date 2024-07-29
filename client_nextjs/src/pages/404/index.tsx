import React from "react";
import styles from "./styles.module.scss";
const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page Not Found</p>
    </div>
  );
};

export default Custom404;
