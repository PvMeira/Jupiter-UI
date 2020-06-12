import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../../config/redux/reducers/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../../../components/collection/preview/index";
import { CollectionItemContainer } from "./style";

const CollectionOverview = ({ collections }) => (
  <CollectionItemContainer>
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </CollectionItemContainer>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
