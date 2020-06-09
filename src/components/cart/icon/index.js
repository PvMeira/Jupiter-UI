import React from "react";
import { ReactComponent as ShoopingIcon } from "../../../assets/shooping-cart.svg";
import "./style.scss";

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoopingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

export default CartIcon;
