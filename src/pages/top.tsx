import React from "react";
import styled, { keyframes } from "styled-components";
import Frame from "../common/frame";

interface State {
  isOpen: boolean;
  isFirst: boolean;
}
export default class Top extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { isFirst: true, isOpen: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true, isFirst: false });
    }, 500);
  }
  render() {
    return (
      <Wrapper>
        <ExtendFrame
          isMenuOpen={this.state.isOpen}
          isFirst={this.state.isFirst}
          time={1}
          fadeInFrame={fadeInFrame}
          fadeOutFrame={fadeOutFrame}
        >
          top
        </ExtendFrame>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  width: 80%;
  height: 90%;
  margin: auto;
  border: solid 1px red;
`;

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
`;
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
`;

const ExtendFrame = styled(Frame)`
  border: solid 3px #1f4017;
`;
