import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
