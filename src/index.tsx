import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

ReactDOM.render(
  <Router>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </Router>,
  document.getElementById("root")
);
