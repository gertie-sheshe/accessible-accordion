import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

// Manages content width based on breakpoints
function Container({ children }) {
  if (!children) return;

  return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
