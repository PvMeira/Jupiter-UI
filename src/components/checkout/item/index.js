import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  removeItem,
} from "../../../config/redux/reducers/cart/cart-actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./style";

const CheckoutItem = ({ item, removeItemFromCart, addItem, removeItem }) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={item.imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{item.name}</TextContainer>
    <QuantityContainer>
      <div onClick={() => removeItem(item)}>&#10094;</div>
      <span>{item.quantity}</span>
      <div onClick={() => addItem(item)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>{item.price}</TextContainer>
    <RemoveButtonContainer onClick={() => removeItemFromCart(item)}>
      &#10005;
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);
const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
