import React from "react";
import AccordionItem from "@accordion/components/AccordionItem";
import PersonalInformationForm from "@accordion/components/PersonalInformationForm";
import BillingForm from "@accordion/components/BillingForm";

import styles from "./HomeView.module.scss";

const HomeView = () => {
  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionGroup}>
        <h1 className={`${styles.h1} ${styles.header}`}>Information Form</h1>
        <div className={styles.accordionItemContainer}>
          <AccordionItem title="Personal Information" id="personalInformation">
            <PersonalInformationForm />
          </AccordionItem>
        </div>
        <div className={styles.accordionItemContainer}>
          <AccordionItem title="Billing Address" id="billingAddress">
            <BillingForm />
          </AccordionItem>
        </div>
        <div className={styles.accordionItemContainer}>
          <AccordionItem title="Shipping Address" id="shippingAddress">
            <BillingForm />
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
