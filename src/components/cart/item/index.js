import React from "react";
import { CartItemContainer, ItemDetailContainer, Name } from "./style";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt={name} />
    <ItemDetailContainer>
      <Name>{name}</Name>
      <span className='price'>
        {quantity} X ${price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);

export default CartItem;
