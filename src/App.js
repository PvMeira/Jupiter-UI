import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/core/header";
import HomePage from "./screens/home/index";
import Shop from "./screens/shop/index";
import SignInAndSignOut from "./screens/sign-in-sign-up/index";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createUser } from "./service/UserService";
import { setCurrentUser } from "./config/redux/reducers/user/user-actions";

import "./App.css";

function App({ setCurrentUser, currentUser }) {
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
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={Shop} />
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

const mapToStateProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapToStateProps, mapDispatchToProps)(App);
