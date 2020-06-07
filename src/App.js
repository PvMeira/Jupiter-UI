import React from "react";
import HomePage from "./screens/home/index";
import Shop from "./screens/shop/index";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/core/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
