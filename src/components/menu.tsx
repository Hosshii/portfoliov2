import React, { Fragment } from 'react'
import styled, { keyframes, Keyframes } from 'styled-components'
import { Transition } from 'react-transition-group'
import { Button } from '@material-ui/core'
// import * as H from "history";
import history from '../common/history'
import Frame from '../common/frame'
import CustomFont from '../common/customfont'
// import { FontSize } from '../utils/const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontColor, device, FontSize } from '../utils/const'

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
          <FontAwesomeIcon
            icon={['fas', 'bars']}
            color={FontColor.Light}
            size="3x"
            onClick={this.toggleOpenMenu}
          ></FontAwesomeIcon>
        </ToggleButtonWrapper>
        <MenuWrapper>
          <Transition in={this.state.isMenuOpen} timeout={1000}>
            {state => (
              <Frame
                isMenuOpen={this.state.isMenuOpen}
                isFirst={this.state.isFirst}
                time={0.8}
                fadeOutFrame={closeAnimation}
              >
                {state === 'entered' && (
                  <MenuContentWrapper>
                    <CustomFont
                      animation={ShowMenuTitle}
                      time={0.5}
                      textAlign="right"
                      size={FontSize.subtitle}
                      padding="0 20px 0 0"
                    >
                      Menu
                    </CustomFont>
                    {/* <MenuTitle state={state}>menu</MenuTitle> */}
                    <CustomFont delay={0.2} animation={ShowMenuText} textAlign="right">
                      <ItemButton
                        onClick={() => {
                          if (history.location.pathname !== '/') {
                            this.toggleOpenMenu()
                          }
                          history.push('/')
                        }}
                      >
                        top
                      </ItemButton>
                    </CustomFont>
                    <CustomFont delay={0.4} animation={ShowMenuText} textAlign="right">
                      <ItemButton
                        onClick={() => {
                          if (history.location.pathname !== '/about') {
                            this.toggleOpenMenu()
                          }
                          history.push('/about')
                        }}
                      >
                        about
                      </ItemButton>
                    </CustomFont>
                    <CustomFont delay={0.6} animation={ShowMenuText} textAlign="right">
                      <ItemButton
                        onClick={() => {
                          if (history.location.pathname !== '/work') {
                            this.toggleOpenMenu()
                          }
                          history.push('/work')
                        }}
                      >
                        work
                      </ItemButton>
                    </CustomFont>
                  </MenuContentWrapper>
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
    transform:translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`
const ToggleButtonWrapper = styled.div`
  position: fixed;
  /* position: absolute; */
  right: 33px;
  top: 30px;
  z-index: 20;
  cursor: pointer;
  transition: transform 0.15s;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(1);
  }
`

const ItemButton = styled(Button)`
  color: #76fb58;
  background-color: #090b0a;
  font-size: ${FontSize.normal};
`

const MenuWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 40px);
  position: absolute;
  width: 100px;
  top: 20px;
  position: fixed;
  z-index: 10;
  @media ${device.mobileS} {
    right: 5px;
  }
  @media ${device.laptop} {
    right: 20px;
  }
`
const MenuContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 60px;
`

const closeAnimation = keyframes`
  0%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
`
