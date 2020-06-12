import React from "react";
import ItemCollection from "../../components/collection/item/index";
import { connect } from "react-redux";
import { selectCollection } from "../../config/redux/reducers/shop/shop-selectors";
import { CollectionPageContainer, ItemsContainer, Title } from "./style";

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <Title>{title.toUpperCase()}</Title>
    <ItemsContainer>
      {items.map((item) => (
        <ItemCollection key={item.id} item={item} />
      ))}
    </ItemsContainer>
  </CollectionPageContainer>
);

/** The second param(Props) is the own props of this component */
const mapStateToProps = (state, props) => ({
  /** The Selector requires the param for the function, and also the state */
  collection: selectCollection(props.match.params.type)(state),
});

export default connect(mapStateToProps)(CollectionPage);
