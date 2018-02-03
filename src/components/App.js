import React, { Component } from "react";
import { Switch, Route } from "react-router";
import styled from "styled-components";

import Game from "./containers/GameContainer";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Game} />
        </Switch>
      </Container>
    );
  }
}

const Container = styled.div`
  color: #3c3c3c;
`;
