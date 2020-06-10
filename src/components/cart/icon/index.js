import React from "react";
import { ReactComponent as ShoopingIcon } from "../../../assets/shooping-cart.svg";
import "./style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../config/redux/reducers/cart/cart-actions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoopingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
