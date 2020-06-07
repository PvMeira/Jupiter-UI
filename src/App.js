import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/core/header";
import HomePage from "./screens/home/index";
import Shop from "./screens/shop/index";
import SignInAndSignOut from "./screens/sign-in-sign-up/index";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={Shop} />
        <Route path={"/signin"} component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
