import React from "react";
import PropTypes from "prop-types";
import styles from "./Page.module.scss";

function Page({ children }) {
  if (!children) return;
  return <div className={styles.container}>{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
