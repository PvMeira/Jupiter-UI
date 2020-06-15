import { ShopActionsType } from "./shop-types";

export const setCollections = (col) => ({
  type: ShopActionsType.SET_COLLECTIONS,
  payload: col,
});
