import React from 'react'
import styled, { keyframes } from 'styled-components'
import Frame from '../common/frame'
import device from '../utils/media-size'
import { FontColor } from '../utils/color'
import CustomFont from '../common/customfont'

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
      <Wrapper>
        <Frame
          isMenuOpen={this.state.isOpen}
          isFirst={this.state.isFirst}
          time={1}
          fadeInFrame={fadeInFrame}
          fadeOutFrame={fadeOutFrame}
          bold={4}
        >
          <CustomFont color="red" delay={1.5}>
            Welcome My Website
          </CustomFont>
        </Frame>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  @media ${device.mobileS} {
    left: 0;
    width: 100%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
    /* width: 80%; */
  }
  height: 90%;
  margin: auto;
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
