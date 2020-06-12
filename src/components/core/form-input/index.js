import React from "react";
import { FormInputContainer, FormInputLabel, GroupContainer } from "./style";
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      {...otherProps}
    ></FormInputContainer>
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
