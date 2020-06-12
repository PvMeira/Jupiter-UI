import React from "react";
import { connect } from "react-redux";
import { getSections } from "../../config/redux/reducers/directory/directory-selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/index";
import { DirectoryMenuContainer } from "./style";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapToStateProps = createStructuredSelector({
  sections: getSections,
});
export default connect(mapToStateProps)(Directory);
