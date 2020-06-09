import React from "react";
import CustomButton from "../../core/custom-button/index";
import "./style.scss";

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton type='button'> GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
