import React from "react";
import TextInput from "../TextInput";
import FieldSet from "@accordion/components/FieldSet";

const PersonalInformationForm = () => {
  return (
    <FieldSet>
      <TextInput type="text" label="Name" id="name" name="name" />
      <TextInput type="email" label="Email" id="email" name="email" />
      <TextInput type="text" id="phone" name="phone" label="Phone" />
      <TextInput type="text" label="Country" id="country" name="country" />
      <TextInput type="text" label="City/Province" id="city" name="city" />
    </FieldSet>
  );
};

export default PersonalInformationForm;
