import React, { Component } from "react";
import styled from "styled-components";
import KeyHandler, { KEYPRESS } from "react-key-handler";

import KeyboardKey from "../KeyboardKey";
import getGridArea from "../../utils/getGridArea";
import Flex from "../Layout/Flex";
import Icon from "../Icon";
import getKey from "../../utils/getKey";

//isSelected={selection && selection.id === resource.id}
export default class ResourcesContainer extends Component {
  render() {
    const { resources, selection, handleResourceClick } = this.props;

    return (
      <Resources>
        {resources.map((resource, i) => (
          <GridItem key={`r${i}`} gridArea={getGridArea(i)}>
            <ResourceButton
              onClick={() => handleResourceClick(resource)}
              selection={selection}
              isSelected={selection && selection.id === resource.id}
            >
              <KeyHandler
                keyEventName={KEYPRESS}
                keyValue={getKey(i)}
                onKeyHandle={() => handleResourceClick(resource)}
              />
              <Icon icon={resource.icon} />
            </ResourceButton>
            <KeyboardKey>
              <span>{getKey(i)}</span>
            </KeyboardKey>
          </GridItem>
        ))}
      </Resources>
    );
  }
}

const GridItem = styled.div`
  grid-area: ${props => props.gridArea};
`;

const ResourceButton = styled.button`
  color: #3c3c3c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  width: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
`;
