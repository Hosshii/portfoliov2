import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import Frame from '../common/frame'
import device from '../utils/media-size'
import CustomFont from '../common/customfont'
import MyIcons, { MyIconProps } from '../components/links'

interface State {
  isOpen: boolean
  isFirst: boolean
}
export default class Top extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { isFirst: true, isOpen: false }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true, isFirst: false })
    }, 500)
  }
  render() {
    return (
      <Fragment>
        <TopWrapper>
          <Frame
            isMenuOpen={this.state.isOpen}
            isFirst={this.state.isFirst}
            time={1}
            fadeInFrame={fadeInFrame}
            fadeOutFrame={fadeOutFrame}
            bold={4}
          >
            <CustomFont delay={1.5} animation={TitleFadeIn} textAlign="left">
              Welcome to My Website
            </CustomFont>
          </Frame>
        </TopWrapper>
        <IconFrameWrapper>
          <Frame
            isMenuOpen={this.state.isOpen}
            isFirst={this.state.isFirst}
            time={1}
            fadeInFrame={fadeInFrame}
            fadeOutFrame={fadeOutFrame}
            bold={4}
          >
            <IconWrapper>
              <MyIcons icons={icon} />
            </IconWrapper>
          </Frame>
        </IconFrameWrapper>
      </Fragment>
    )
  }
}
const icon = [
  { icon: ['fab', 'github'], color: 'red' },
  { icon: ['fab', 'github'], color: 'red' }
] as MyIconProps[]
const TopWrapper = styled.div`
  position: absolute;
  top: 5%;
  height: 70%;
  margin: auto;
  @media ${device.mobileS} {
    left: 0;
    width: 100%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
  }
`
const IconFrameWrapper = styled.div`
  position: absolute;
  top: 80%;
  height: 20%;
  @media ${device.mobileS} {
    left: 0;
    width: 100%;
  }
  @media ${device.laptop} {
    left: 150px;
    width: calc(100% - 300px);
  }
`

const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  left: 25%;
`
const fadeInFrame = keyframes`
    0% {
      width: 0;
      height: 0;
      right: 50%;
      top: 50%;
      opacity: 0;
    }
    50% {
      width: 80%;
      height: 1px;
      right: 10%;
      top: 50%;
      opacity: 1;
    }
    100% {
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
`

const fadeOutFrame = keyframes`
  0% {
      width: 100%;
      height: 100%;
    }
  50% {
    width: 80%;
    height: 1px;
    right: 10%;
    top: 50%;
    opacity: 1;
  }
  100% {
    width: 0;
    height: 0;
    right: 50%;
    top: 50%;
    opacity: 0;
  }
`
const TitleFadeIn = keyframes`
  0% {
    opacity: 0;
    transform:translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translateX(10px);
  } 
`
