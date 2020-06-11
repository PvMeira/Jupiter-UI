import React from "react";
import { connect } from "react-redux";
import { getSections } from "../../config/redux/reducers/directory/directory-selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/index";
import "./style.scss";

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapToStateProps = createStructuredSelector({
  sections: getSections,
});
export default connect(mapToStateProps)(Directory);
