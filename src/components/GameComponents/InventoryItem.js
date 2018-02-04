import React, { Component } from "react";
import styled from "styled-components";
import KeyHandler, { KEYPRESS } from "react-key-handler";

import Icon from "../Icon";
import getInventoryKey from "../../utils/getInventoryKey";
import KeyboardKey from "../KeyboardKey";
export default class InventoryItem extends Component {
  render() {
    const { item, handleItemClick, isSelected, i } = this.props;

    return (
      <div>
        <Item isSelected={isSelected} onClick={() => handleItemClick(item)}>
          <KeyHandler
            keyEventName={KEYPRESS}
            keyValue={getInventoryKey(i)}
            onKeyHandle={() => handleItemClick(item)}
          />
          <Icon icon={item.icon} />
        </Item>
        <KeyboardKey>
          <span>{getInventoryKey(i)}</span>
        </KeyboardKey>
      </div>
    );
  }
}

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${props => (props.isSelected ? "3px solid #FF5A5F" : "3px solid #3c3c3c")};
  border-radius: 100%;
  width: 75px;
  height: 75px;

  margin: 0 8px;

  p {
    font-size: 8px;
    color: white;
  }
`;
