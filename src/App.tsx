import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Menu from "./components/test";
import Top from "./pages/top";
import About from "./pages/about";
import Work from "./pages/work";
import history from "./common/history";

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
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
