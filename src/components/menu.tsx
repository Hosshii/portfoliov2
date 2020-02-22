import React, { Fragment } from 'react'
import styled, { keyframes, Keyframes } from 'styled-components'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'
import { Button } from '@material-ui/core'
// import * as H from "history";
import history from '../common/history'
import Frame from '../common/frame'
import CustomFont from '../common/customfont'

interface State {
  isMenuOpen: boolean
  isFirst: boolean
}
// interface Props {
//   history: React.CSSProperties;
// }

export default class Menu extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.toggleOpenMenu = this.toggleOpenMenu.bind(this)
    this.state = { isMenuOpen: false, isFirst: true }
  }
  toggleOpenMenu() {
    this.setState((state: State) => ({
      isMenuOpen: !state.isMenuOpen,
      isFirst: false
    }))
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
              <Frame isMenuOpen={this.state.isMenuOpen} isFirst={this.state.isFirst} time={0.8}>
                {state === 'entered' && (
                  <Fragment>
                    <CustomFont animation={ShowMenuTitle} time={0.5} textAlign="left">
                      Menu
                    </CustomFont>
                    {/* <MenuTitle state={state}>menu</MenuTitle> */}
                    <CustomFont delay={0.2} animation={ShowMenuText} textAlign="right">
                      <ItemButton onClick={() => history.push('/')}>top</ItemButton>
                    </CustomFont>
                    <CustomFont delay={0.4} animation={ShowMenuText} textAlign="right">
                      <ItemButton onClick={() => history.push('/about')}>about</ItemButton>
                    </CustomFont>
                    <CustomFont delay={0.6} animation={ShowMenuText} textAlign="right">
                      <ItemButton onClick={() => history.push('/work')}>work</ItemButton>
                    </CustomFont>
                  </Fragment>
                )}
              </Frame>
            )}
          </Transition>
        </MenuWrapper>
      </Fragment>
    )
  }
}

const ShowMenuText = keyframes`
  0% {
    opacity: 0;
    transform:translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(-5px);
  }
`
const ShowMenuTitle = keyframes`
  0% {
    opacity: 0;
    transform:translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translateX(10px);
  }
`
const ToggleButtonWrapper = styled.div`
  position: fixed;
  /* position: absolute; */
  right: 10px;
  z-index: 10;
`
const ToggleButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`

const ItemButton = styled(Button)`
  color: #76fb58;
  background-color: #090b0a;
`

const MenuWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 60px);
  position: absolute;
  width: 100px;
  right: 10px;
  top: 50px;
  position: fixed;
  z-index: 10;
`
