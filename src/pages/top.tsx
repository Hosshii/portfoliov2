import React from "react";
import styled from "styled-components";

export default class Top extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <div>top</div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
`;
