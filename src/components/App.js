import React, { Component } from "react";
import { Switch, Route } from "react-router";

import Game from "./containers/GameContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Game} />
        </Switch>
      </div>
    );
  }
}
