import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Transition } from "react-transition-group";

interface State {
  isMenuOpen: boolean;
}
export default class Menu extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.toggleOpenMenu = this.toggleOpenMenu.bind(this);
    this.state = { isMenuOpen: true };
  }
  toggleOpenMenu() {
    this.setState((state: State) => ({ isMenuOpen: !state.isMenuOpen }));
  }
  render() {
    return (
      <Fragment>
        <ToggleButton onClick={this.toggleOpenMenu}>button</ToggleButton>
        <MenuFrame isOpen={this.state.isMenuOpen}>
          <MenuTitle>menu</MenuTitle>
          <MenuItem>
            <Link to="/">top</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">about</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/work">work</Link>
          </MenuItem>
        </MenuFrame>
      </Fragment>
    );
  }
}

function MenuFrame(props: any) {
  return (
    <Transition in={props.isOpen} timeout={1000}>
      {(state: string) => (
        <MenuWrapper state={state}>{props.children}</MenuWrapper>
      )}
    </Transition>
  );
}
const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  z-index: 10;
`;
const MenuWrapper = styled.div<{ state: string }>`
  position: absolute;
  width: 100px;
  right: 10px;
  border: solid 1px black;
  transition: 1s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

const MenuTitle = styled.div`
  width: 100%;
  text-align: left;
`;

const MenuItem = styled.div`
  width: 100%;
  text-align: right;
`;
