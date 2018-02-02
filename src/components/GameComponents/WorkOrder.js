import React, { Component } from "react";
import styled from "styled-components";

export default class WorkOrder extends Component {
  render() {
    const { workOrder, handleWorkOrderClick, inventory } = this.props;

    const completable = inventory.find(item => item.name === workOrder.item.name);

    return (
      <Order completable={completable} onClick={() => handleWorkOrderClick(workOrder)}>
        <h4>{workOrder.item.name}</h4>
        {Math.floor(workOrder.duration)}s
        {completable ? (
          <p>Order ready! Click to collect</p>
        ) : (
          workOrder.item.requires.map((item, i) => <p key={`i${i}`}>{item.name}</p>)
        )}
      </Order>
    );
  }
}

const Order = styled.div`
  width: 100px;

  background: ${props => (props.completable ? "papaywhip" : "gray")};
  border: ${props => (props.completable ? "1px solid green" : "none")};

  padding: 8px;
  margin: 8px;

  p {
    font-size: 8px;
    color: white;
  }
`;
