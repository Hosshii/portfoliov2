import React, { Fragment } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { Button } from "@material-ui/core";
// import * as H from "history";
import history from "../common/history";
import Frame from "../common/frame";

interface State {
  isMenuOpen: boolean;
  isFirst: boolean;
}
// interface Props {
//   history: React.CSSProperties;
// }

export default class Menu extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.toggleOpenMenu = this.toggleOpenMenu.bind(this);
    this.state = { isMenuOpen: false, isFirst: true };
  }
  toggleOpenMenu() {
    this.setState((state: State) => ({
      isMenuOpen: !state.isMenuOpen,
      isFirst: false
    }));
  }

  render() {
    return (
      <Fragment>
        <ToggleButtonWrapper>
          <ToggleButton onClick={this.toggleOpenMenu}>button</ToggleButton>
        </ToggleButtonWrapper>
        <MenuWrapper>
          <Transition in={this.state.isMenuOpen} timeout={1000}>
            {state => (
              <Frame
                isMenuOpen={this.state.isMenuOpen}
                isFirst={this.state.isFirst}
                time={0.8}
              >
                {state === "entered" && (
                  <Fragment>
                    <MenuTitle state={state}>menu</MenuTitle>
                    <MenuItem state={state} delay={0.3}>
                      <ItemButton onClick={() => history.push("/")}>
                        top
                      </ItemButton>
                    </MenuItem>
                    <MenuItem state={state} delay={0.5}>
                      <ItemButton onClick={() => history.push("/about")}>
                        about
                      </ItemButton>
                    </MenuItem>
                    <MenuItem state={state} delay={0.7}>
                      <ItemButton onClick={() => history.push("/work")}>
                        work
                      </ItemButton>
                    </MenuItem>
                  </Fragment>
                )}
              </Frame>
            )}
          </Transition>
        </MenuWrapper>
      </Fragment>
    );
  }
}

const getMenuTitleStyle = (props: TransitionStatus) => {
  if (props === "entered") {
    return `
      animation: show-menu-title 0.5s ease forwards ;
      @keyframes show-menu-title {
        0% {
          opacity: 0;
          transform:translateX(0px);
        }
        100% {
          opacity: 1;
          transform: translateX(10px);
        }
      }
    `;
  }
};
const getMenuItemStyle = (props: TransitionStatus, delay: number) => {
  if (props === "entered") {
    return `
      animation: show-menu-text 0.5s ease ${delay}s forwards ;
      @keyframes show-menu-text {
        0% {
          opacity: 0;
          transform:translateX(-10px);
        }
        100% {
          opacity: 1;
          transform: translateX(-5px);
        }
      }
    `;
  }
};
const ToggleButtonWrapper = styled.div`
  position: fixed;
  /* position: absolute; */
  right: 10px;
  z-index: 10;
`;
const ToggleButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const ItemButton = styled(Button)`
  color: #76fb58;
  background-color: #090b0a;
`;

const MenuTitle = styled.div<{ state: TransitionStatus }>`
  ${({ state }) => getMenuTitleStyle(state)}
  width: 100%;
  text-align: left;
  color: #76fb58;
`;

const MenuItem = styled.div<{ state: TransitionStatus; delay: number }>`
  ${({ state, delay }) => getMenuItemStyle(state, delay)}
  width: 100%;
  text-align: right;
  opacity: 0;
`;

const MenuWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 60px);
  position: absolute;
  width: 100px;
  right: 10px;
  top: 50px;
  position: fixed;
`;
