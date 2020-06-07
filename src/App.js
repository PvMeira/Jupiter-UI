import React from "react";
import HomePage from "./screens/home/index";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
