import React from "react";
import "./style.scss";

const CustomButton = ({
  children,
  primary = false,
  inverted,
  ...otherProps
}) => (
  <button
    className={`  ${inverted ? "inverted" : ""} ${
      primary ? "primary" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
