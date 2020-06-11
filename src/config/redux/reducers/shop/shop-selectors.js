import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const getCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
