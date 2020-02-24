import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu'
import Top from './pages/top'
import About from './pages/about'
import Work from './pages/work'
import history from './common/history'
import styled from 'styled-components'

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Router history={history}>
          <Menu></Menu>
          <Switch>
            <Route path="/" exact component={Top} />
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
          </Switch>
        </Router>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100%;
  /* height: 100%; */
  min-height: 100%;
  box-sizing: border-box;
`
