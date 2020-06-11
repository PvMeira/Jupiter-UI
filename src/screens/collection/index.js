import React from "react";
import ItemCollection from "../../components/collection/item/index";
import { connect } from "react-redux";
import { selectCollection } from "../../config/redux/reducers/shop/shop-selectors";

import "./style.scss";

const CollectionPage = ({ collection: { title, items } }) => (
  <div className='collection-page'>
    <h2 className='title'>{title.toUpperCase()}</h2>
    <div className='items'>
      {items.map((item) => (
        <ItemCollection key={item.id} item={item} />
      ))}
    </div>
  </div>
);

/** The second param(Props) is the own props of this component */
const mapStateToProps = (state, props) => ({
  /** The Selector requires the param for the function, and also the state */
  collection: selectCollection(props.match.params.type)(state),
});

export default connect(mapStateToProps)(CollectionPage);
