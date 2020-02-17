import React from "react";
import styled from "styled-components";

export default class Work extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <div>work</div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
`;
