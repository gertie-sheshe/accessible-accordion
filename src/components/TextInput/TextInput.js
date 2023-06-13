import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ type, name, id, label }) => {
  return (
    <p className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input name={name} type={type} id={id} aria-required="true" />
    </p>
  );
};

export default TextInput;
