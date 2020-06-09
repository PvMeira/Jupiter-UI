import { CartActionTypes } from "./cart-types";
const INITIAL_STATE = {
  cartIsOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART_IS_OPEN:
      return {
        ...state,
        cartIsOpen: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
