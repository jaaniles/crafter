import React, { Component } from "react";
import styled from "styled-components";

import ProgressBar from "../ProgressBar";

export default class WorkOrder extends Component {
  render() {
    const { workOrder, handleWorkOrderClick, inventory } = this.props;

    const completable = inventory.find(item => item.name === workOrder.item.name);
    const durationProgress = workOrder.duration / workOrder.maxDuration * 100;

    return (
      <Container>
        <ProgressBar progress={durationProgress} />
        <Order completable={completable} onClick={() => handleWorkOrderClick(workOrder)}>
          <WorkOrderTitle>{workOrder.item.name}</WorkOrderTitle>
          {completable && <p>Order ready! Click to collect</p>}
        </Order>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 150px;
  margin: 0 8px;

  color: papayawhip;
`;
const WorkOrderTitle = styled.p`
  font-size: 24px;
  letter-spacing: 1px;

  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid papayawhip;
`;
const Order = styled.div`
  background: ${props => (props.completable ? "#73B843" : "gray")};
  border: ${props => (props.completable ? "1px solid green" : "none")};
  color: ${props => (props.completable ? "white" : "inherit")};

  padding: 8px 16px;

  width: 100%;

  text-align: left;
`;
