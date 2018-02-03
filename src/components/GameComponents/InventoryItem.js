import React, { Component } from "react";
import styled from "styled-components";

export default class InventoryItem extends Component {
  render() {
    const { item, handleItemClick, isSelected } = this.props;

    return (
      <Item isSelected={isSelected} onClick={() => handleItemClick(item)}>
        {item.name}
      </Item>
    );
  }
}

const Item = styled.div`
  width: 100px;

  background: #3c3c3c;
  color: white;
  padding: 8px;
  margin: 8px;

  border: ${props => (props.isSelected ? "1px solid cyan" : "none")};

  p {
    font-size: 8px;
    color: white;
  }
`;
