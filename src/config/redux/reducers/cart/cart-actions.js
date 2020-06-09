import { CartActionTypes } from "./cart-types";

export const setCartIsOpen = (isOpen) => ({
  type: CartActionTypes.SET_CART_IS_OPEN,
  payload: isOpen,
});
