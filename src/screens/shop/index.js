import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection/overview/index";
import CollectionPage from "../collection/index";

const Shop = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:type`} component={CollectionPage} />
  </div>
);

export default Shop;
