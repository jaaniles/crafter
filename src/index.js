import React from "react";
import { combineReducers } from "redux";
import ReactDOM from "react-dom";

import App from "./components/containers/AppContainer";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configure-store";
import * as reducers from "./ducks";

import "./index.css";
import "css-wipe/index.css";

const rootReducer = combineReducers(reducers);
const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
