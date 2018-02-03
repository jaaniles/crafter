import React, { Component } from "react";
import styled from "styled-components";

import Flex from "../Layout/Flex";

//isSelected={selection && selection.id === resource.id}
export default class ResourcesContainer extends Component {
  render() {
    const { resources, selection, handleResourceClick } = this.props;

    return (
      <Resources>
        {resources.map((resource, i) => (
          <ResourceButton
            key={`r${i}`}
            onClick={() => handleResourceClick(resource)}
            selection={selection}
            isSelected={selection && selection.id === resource.id}
          >
            {resource.name}
          </ResourceButton>
        ))}
      </Resources>
    );
  }
}

const ResourceButton = styled.button`
  background: ${props => (props.selection ? "#087E8B" : "#FF5A5F")};
  color: #3c3c3c;

  text-transform: uppercase;
  letter-spacing: 1px;

  border: ${props => (props.isSelected ? "3px solid #FF5A5F" : "none")};

  border-radius: 100%;
  width: 100px;
  height: 100px;

  margin: 16px;

  outline: none;
  cursor: pointer;
`;
const Resources = Flex.extend`
  justify-content: space-around;
`;
