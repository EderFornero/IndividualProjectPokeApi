import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <RouterProvider router={Router} />
  </Provider>,
  document.getElementById("root")
);
