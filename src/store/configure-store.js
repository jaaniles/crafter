import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const __DEVELOPMENT__ = false;

export default (reducers, initialState) => {
  const middlewares = getMiddlewares();

  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(
    createStore
  );

  return createStoreWithMiddleware(reducers, initialState);
};

export function getMiddlewares() {
  let middleware = [thunk, promiseMiddleware()];

  if (__DEVELOPMENT__) {
    middleware = middleware.concat([logger]);
  }

  return middleware;
}
