import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { getCollection } from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collection/overview/index";
import CollectionPage from "../collection/index";
import { mountCollection } from "../../service/ShopService";
import { setCollections } from "../../config/redux/reducers/shop/shop-actions";
import { connect } from "react-redux";

const Shop = ({ match, setCollections }) => {
  let unsubscribeFromSnap = null;

  useEffect(() => {
    const ColRef = getCollection(`collections`);
    ColRef.onSnapshot(async (snap) => {
      setCollections(mountCollection(snap));
    });
    return () => {};
  }, []);

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:type`} component={CollectionPage} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setCollections: (col) => dispatch(setCollections(col)),
});
export default connect(null, mapDispatchToProps)(Shop);
