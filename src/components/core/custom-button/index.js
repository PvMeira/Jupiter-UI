import React from "react";
import "./style.scss";

const CustomButton = ({ children, primary = false, ...otherProps }) => (
  <button
    className={` ${primary ? "primary" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
