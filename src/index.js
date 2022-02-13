import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./styles.scss";
import { store } from "./store/index";
import { BrowserRouter } from "react-router-dom";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
