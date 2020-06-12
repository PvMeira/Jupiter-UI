import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../config/redux/reducers/cart/cart-actions";
import { selectCartItemsCount } from "../../../config/redux/reducers/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { CartIconContainer, ShoopingIconContainer, ItemCount } from "./style";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoopingIconContainer />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
