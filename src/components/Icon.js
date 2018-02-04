import React, { Component } from "react";
import styled from "styled-components";

import PLACEHOLDER_ICON from "../assets/icons/placeholder.png";

export default class Icon extends Component {
  render() {
    const { icon } = this.props;

    return <Image src={icon || PLACEHOLDER_ICON} />;
  }
}

const Image = styled.img`
  width: 45px;
  height: 45px;
`;
