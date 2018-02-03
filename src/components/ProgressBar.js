import React, { Component } from "react";
import styled from "styled-components";

export default class ProgressBar extends Component {
  render() {
    const { progress } = this.props;

    return (
      <ProgressBarContainer>
        <InnerBar style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
    );
  }
}

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  background: papayawhip;
`;
const InnerBar = styled.div`
  height: 5px;
  background: #ff5a5f;
`;
