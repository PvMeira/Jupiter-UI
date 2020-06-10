import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  removeItem,
} from "../../../config/redux/reducers/cart/cart-actions";
import "./style.scss";

const CheckoutItem = ({ item, removeItemFromCart, addItem, removeItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={item.imageUrl} />
    </div>
    <span className='name'>{item.name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(item)}>
        &#10094;
      </div>
      <span className='value'>{item.quantity}</span>
      <div className='arrow' onClick={() => addItem(item)}>
        &#10095;
      </div>
    </span>
    <span className='price'>{item.price}</span>
    <div className='remove-button' onClick={() => removeItemFromCart(item)}>
      &#10005;
    </div>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
