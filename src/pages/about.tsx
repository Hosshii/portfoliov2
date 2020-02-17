import React from "react";
import styled from "styled-components";

export default class About extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <div>about</div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
`;
