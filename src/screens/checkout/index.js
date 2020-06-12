import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsPrice,
} from "../../config/redux/reducers/cart/cart-selectors";
import CheckoutItem from "../../components/checkout/item/index";
import CheckOutButton from "../../components/stripe/button/index";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  TestWarning,
  Total,
} from "./style";

const CheckoutPage = ({ cartItems, totalValue }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map((i) => (
      <CheckoutItem key={i.id} item={i} />
    ))}

    <Total>
      <span>TOTAL $ {totalValue}</span>
    </Total>
    <TestWarning>
      **Use this Mock Credit Card for payment**
      <br />
      4242 4242 4242 4242 - Exp: 01/20 CDV: 123
    </TestWarning>
    <CheckOutButton price={totalValue} />
  </CheckoutPageContainer>
);

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartItemsPrice,
});
export default connect(mapToStateProps)(CheckoutPage);
