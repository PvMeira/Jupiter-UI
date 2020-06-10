import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { addItem } from "../../../config/redux/reducers/cart/cart-actions";
import CustomButton from "../../core/custom-button/index";

const ItemCollection = ({ item, addItem }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />
    <div className='collection-footer'>
      <span className='name'>{item.name}</span>
      <span className='price'>{item.price}</span>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}>
      Add to Cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(ItemCollection);
