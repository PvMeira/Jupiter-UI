import React from "react";
import CustomButton from "../../core/custom-button/index";
import CartItem from "../item/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../../config/redux/reducers/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

import "./style.scss";

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className='empty-message'>Your cart is empty!</span>
      )}
    </div>
    <CustomButton type='button' onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapToStateProps)(CartDropdown));
