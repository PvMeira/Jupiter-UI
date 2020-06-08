import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/core/header";
import HomePage from "./screens/home/index";
import Shop from "./screens/shop/index";
import SignInAndSignOut from "./screens/sign-in-sign-up/index";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header user={currentUser} />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={Shop} />
        <Route path={"/signin"} component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
