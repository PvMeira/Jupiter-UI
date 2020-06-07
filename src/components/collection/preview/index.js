import React from "react";
import "./style.scss";
import ItemCollection from "../item/index";

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherProps }) => (
          <ItemCollection key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;

PreviewCollection.defaultProps = {
  title: "",
  items: [],
};
