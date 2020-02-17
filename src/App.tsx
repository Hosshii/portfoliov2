import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/menu";
import Top from "./pages/top";
import About from "./pages/about";
import Work from "./pages/work";

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route path="/" exact component={Top} />
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
