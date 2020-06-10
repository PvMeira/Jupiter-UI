import React from "react";
import CustomButton from "../../core/custom-button/index";
import CartItem from "../item/index";
import { connect } from "react-redux";
import { selectCartItems } from "../../../config/redux/reducers/cart/cart-selectors";
import "./style.scss";

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton type='button'> GO TO CHECKOUT</CustomButton>
  </div>
);

const mapToStateProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapToStateProps)(CartDropdown);
