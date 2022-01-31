import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

import logger from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // spread array `middlewares` into arguments passed to `applyMiddleware`

export default store;
