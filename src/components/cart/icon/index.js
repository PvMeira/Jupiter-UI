import React from "react";
import { ReactComponent as ShoopingIcon } from "../../../assets/shooping-cart.svg";
import "./style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../config/redux/reducers/cart/cart-actions";
import { selectCartItemsCount } from "../../../config/redux/reducers/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoopingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
