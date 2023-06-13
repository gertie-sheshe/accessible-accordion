import React from "react";
import TextInput from "../TextInput";
import FieldSet from "@accordion/components/FieldSet";

const BillingForm = () => {
  return (
    <FieldSet>
      <TextInput type="text" label="Address1" id="address1" name="address1" />
      <TextInput type="text" label="Address2" id="address2" name="address2" />
      <TextInput type="text" label="City" id="city" name="city" />
      <TextInput type="text" id="zip" name="zip" label="Zip Code" />
    </FieldSet>
  );
};

export default BillingForm;
