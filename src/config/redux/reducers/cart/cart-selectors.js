import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((a, i) => a + i.quantity, 0)
);

export const selectCartItemsPrice = createSelector([selectCartItems], (items) =>
  items.reduce((a, i) => a + i.quantity * i.price, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
