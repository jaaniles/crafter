import React, { Component } from "react";
import styled from "styled-components";

import getGridArea from "../../utils/getGridArea";
import Flex from "../Layout/Flex";
import Icon from "../Icon";

//isSelected={selection && selection.id === resource.id}
export default class ResourcesContainer extends Component {
  render() {
    const { resources, selection, handleResourceClick } = this.props;

    return (
      <Resources>
        {resources.map((resource, i) => (
          <ResourceButton
            key={`r${i}`}
            gridArea={getGridArea(i)}
            onClick={() => handleResourceClick(resource)}
            selection={selection}
            isSelected={selection && selection.id === resource.id}
          >
            <Icon icon={resource.icon} />
          </ResourceButton>
        ))}
      </Resources>
    );
  }
}

const ResourceButton = styled.button`
  color: #3c3c3c;

  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: ${props => props.gridArea};

  text-transform: uppercase;
  letter-spacing: 1px;

  border: ${props => (props.isSelected ? "3px solid #FF5A5F" : "3px solid #3c3c3c")};
  border-radius: 100%;
  width: 75px;
  height: 75px;

  outline: none;
  cursor: pointer;
  justify-self: center;
`;
const Resources = Flex.extend`
  display: grid;
  grid-template-areas:
    "topleft top topright"
    "left middle right"
    "bottomleft bottom bottomright";
  grid-template-columns: 80px 80px 80px;
  grid-template-rows: 80px 80px 80px;

  margin: -30% auto;
`;
