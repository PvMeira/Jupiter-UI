import React from "react";
import { connect } from "react-redux";
import { getCollections } from "../../config/redux/reducers/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../../components/collection/preview/index";
import "./style.scss";

const Shop = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: getCollections,
});

export default connect(mapStateToProps)(Shop);
