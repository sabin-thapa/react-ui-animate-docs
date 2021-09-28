import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import AppWithRouter from "./app";

import "../node_modules/prismjs/themes/prism-tomorrow.css";
import "./sass/main.scss";
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouter />
  </Provider>,
  document.querySelector("#root")
);
