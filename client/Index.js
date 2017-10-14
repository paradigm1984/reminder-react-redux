/* VIEWS INDEX */

// packages
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducers.js";

const store = createStore(reducer);

// imports
import App from "./components/app.js";
import Routes from "./routes.js";
import 'bootstrap/dist/css/bootstrap.css';
require("../server/css/style.scss");

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={Routes} />
  </Provider>, document.getElementById("App")
);
