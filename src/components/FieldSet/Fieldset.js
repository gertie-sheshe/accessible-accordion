import React from "react";
import styles from "./Fieldset.module.scss";

const Fieldset = ({ children }) => {
  if (!children) return null;

  return <fieldset className={styles.fieldset}>{children}</fieldset>;
};

export default Fieldset;
