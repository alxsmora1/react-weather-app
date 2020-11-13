import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import WeatherBox from "./components/WeatherBox";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <WeatherBox />
              </div>
            );
          }}
        ></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
