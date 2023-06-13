import React, { useState } from "react";
import Image from "next/image";
import closeIcon from "../../../public/close.svg";
import openIcon from "../../../public/open.svg";
import styles from "./AccordionItem.module.scss";

const AccordionItem = ({ title, id, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h2 className={styles.h2}>
        <button
          className={`${styles.button} ${styles.accordionButton}`}
          onClick={handleAccordionToggle}
          aria-controls={`section-${id}`}
          id={id}
          aria-expanded={isExpanded}
        >
          <span className={styles.buttonIcon}>
            <Image
              src={isExpanded ? closeIcon : openIcon}
              alt=""
              width={30}
              height={30}
            />
          </span>
          <span className={styles.h2}>{title}</span>
        </button>
      </h2>
      <div
        role="region"
        className={styles.roleRegion}
        aria-labelledby="personalInformation"
        id={`section-${id}`}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </>
  );
};

export default AccordionItem;
