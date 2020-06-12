import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../../config/redux/reducers/cart/cart-actions";
import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from "./style";

const ItemCollection = ({ item, addItem }) => (
  <CollectionItemContainer>
    <BackgroundImage />
    <CollectionFooterContainer>
      <NameContainer>{item.name}</NameContainer>
      <PriceContainer>{item.price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton inverted onClick={() => addItem(item)}>
      Add to Cart
    </AddButton>
  </CollectionItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(ItemCollection);
