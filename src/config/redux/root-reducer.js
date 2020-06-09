import { combineReducers } from "redux";
import userReducer from "./reducers/user/user-reducer";
import cartReducer from "./reducers/cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
