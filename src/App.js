import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./config/redux/reducers/user/user-actions";
import { selectCurrentUser } from "./config/redux/reducers/user/user-selectors";
import { toggleLoading } from "./config/redux/reducers/application/application-selectors";
import { createStructuredSelector } from "reselect";
import ReactLoading from "react-loading";

import Header from "./components/core/header";
import HomePage from "./screens/home/index";
import CheckoutPage from "./screens/checkout/index";
import Shop from "./screens/shop/index";
import SignInAndSignOut from "./screens/sign-in-sign-up/index";

import { createUser } from "./service/UserService";

import "./App.css";

function App({ setCurrentUser, currentUser, isLoading }) {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);
        userRef.onSnapshot((snap) => {
          setCurrentUser({
            id: snap.id,
            ...snap.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      {isLoading && <ReactLoading type='bars' color='black' />}
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={Shop} />
        <Route exact path={"/checkout"} component={CheckoutPage} />
        <Route
          exact
          path={"/signin"}
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignOut />
          }
        />
      </Switch>
    </div>
  );
}

const mapToStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: toggleLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapToStateProps, mapDispatchToProps)(App);
