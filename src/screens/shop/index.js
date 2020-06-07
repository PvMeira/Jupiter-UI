import React, { useState } from "react";
import "./style.scss";
import SHOP_DATA from "../../config/data/data";
import PreviewCollection from "../../components/collection/preview/index";

const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
