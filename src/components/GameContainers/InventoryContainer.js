import React, { Component } from "react";
import styled from "styled-components";

import InventoryItem from "../GameComponents/InventoryItem";
import Flex from "../Layout/Flex";

export default class InventoryContainer extends Component {
  render() {
    const { inventory, handleItemClick, selection } = this.props;

    return (
      <Inventory>
        {inventory.map((item, i) => (
          <InventoryItem
            handleItemClick={handleItemClick}
            isSelected={selection && selection.id === item.id}
            key={`item${i}`}
            item={item}
          />
        ))}
      </Inventory>
    );
  }
}

const Inventory = Flex.extend`
  backgrounf: #efefef;
`;
