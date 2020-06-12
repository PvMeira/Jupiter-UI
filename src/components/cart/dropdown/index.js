import React from "react";
import CustomButton from "../../core/custom-button/index";
import CartItem from "../item/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../../config/redux/reducers/cart/cart-selectors";
import { toggleCartHidden } from "../../../config/redux/reducers/cart/cart-actions";
import { createStructuredSelector } from "reselect";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./style";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessage>Your cart is empty!</EmptyMessage>
      )}
    </CartItemsContainer>
    <CustomButton
      type='button'
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapToStateProps)(CartDropdown));
