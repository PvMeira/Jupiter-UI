import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsPrice,
} from "../../config/redux/reducers/cart/cart-selectors";
import CheckoutItem from "../../components/checkout/item/index";
import CheckOutButton from "../../components/stripe/button/index";
import "./style.scss";

const CheckoutPage = ({ cartItems, totalValue }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((i) => (
      <CheckoutItem key={i.id} item={i} />
    ))}

    <div className='total'>
      <span>TOTAL $ {totalValue}</span>
    </div>
    <div className='test-warning'>
      **Use this Mock Credit Card for payment**
      <br />
      4242 4242 4242 4242 - Exp: 01/20 CDV: 123
    </div>
    <CheckOutButton price={totalValue} />
  </div>
);

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartItemsPrice,
});
export default connect(mapToStateProps)(CheckoutPage);
