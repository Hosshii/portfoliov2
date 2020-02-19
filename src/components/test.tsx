import React, { Fragment } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { Button } from "@material-ui/core";
// import * as H from "history";
import history from "../common/history";

interface State {
  isMenuOpen: boolean;
  isFirst: boolean;
}
// interface Props {
//   history: H.History;
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
        <ToggleButton onClick={this.toggleOpenMenu}>button</ToggleButton>
        <MenuWrapper>
          <Transition in={this.state.isMenuOpen} timeout={1000}>
            {state => (
              <MenuFrame
                isMenuOpen={this.state.isMenuOpen}
                isFirst={this.state.isFirst}
              >
                {state === "entered" && (
                  <Fragment>
                    <MenuTitle state={state}>menu</MenuTitle>
                    <MenuItem state={state} delay={0.3}>
                      <Button onClick={() => history.push("/top")}>top</Button>
                    </MenuItem>
                    <MenuItem state={state} delay={0.5}>
                      <Button onClick={() => history.push("/about")}>
                        about
                      </Button>
                    </MenuItem>
                    <MenuItem state={state} delay={0.7}>
                      <Button onClick={() => history.push("/work")}>
                        work
                      </Button>
                    </MenuItem>
                  </Fragment>
                )}
              </MenuFrame>
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
const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  z-index: 10;
`;

const MenuFrame = styled.div<{ isMenuOpen: boolean; isFirst: boolean }>`
  position: absolute;
  border-radius: 10px;
  border: solid 1px black;
  width: 100%;
  height: 100%;
  /* background-color: #090b0a; */
  animation: ${({ isMenuOpen, isFirst }) =>
      isFirst || isMenuOpen ? "fadeInFrame" : "fadeOutFrame"}
    0.8s ease forwards ${({ isFirst }) => (isFirst ? "paused" : "running")};
  @keyframes fadeInFrame {
    0% {
      width: 0;
      height: 0;
      right: 60px;
      opacity: 0;
    }
    30% {
      width: 100%;
      height: 0;
      right: 10px;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      right: 10px;
    }
  }
  @keyframes fadeOutFrame {
    0% {
      width: 100%;
      height: 100%;
      right: 10px;
      opacity: 1;
    }
    70% {
      width: 100%;
      height: 0;
      right: 10px;
      opacity: 1;
    }
    100% {
      width: 0;
      height: 0;
      right: 60px;
      opacity: 0;
    }
  }
`;

const MenuTitle = styled.div<{ state: TransitionStatus }>`
  ${({ state }) => getMenuTitleStyle(state)}
  width: 100%;
  text-align: left;
`;

const MenuItem = styled.div<{ state: TransitionStatus; delay: number }>`
  ${({ state, delay }) => getMenuItemStyle(state, delay)}
  width: 100%;
  text-align: right;
  opacity: 0;
`;

const MenuWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 20px);
  position: absolute;
  width: 100px;
  right: 10px;
  top: 10px;
`;
