import React from "react";
import ItemCollection from "../item/index";

import { PreviewCollectionContainer, Title, PreviewContainer } from "./style";

const PreviewCollection = ({ title, items }) => (
  <PreviewCollectionContainer>
    <Title className='title'>{title.toUpperCase()}</Title>
    <PreviewContainer className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <ItemCollection key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </PreviewCollectionContainer>
);

export default PreviewCollection;

PreviewCollection.defaultProps = {
  title: "",
  items: [],
};
