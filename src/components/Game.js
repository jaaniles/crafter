import React, { Component } from "react";
import styled from "styled-components";

import Facility from "./GameComponents/Facility";
import WorkOrder from "./GameComponents/WorkOrder";
import InventoryItem from "./GameComponents/InventoryItem";

const DELTA = 0.0167;

export default class Game extends Component {
  state = {
    selection: null
  };

  componentWillMount() {
    this.props.addWorkOrder(100);
    this.props.addWorkOrder(200);
    this.props.addWorkOrder(300);

    this.props.addResource("woodLog");
    this.props.addResource("ore");

    this.props.addFacility("forge");
    this.props.addFacility("lumberjack");
    this.props.addFacility("anvil");

    requestAnimationFrame(this.update);
  }

  update = () => {
    this.gameLoop();
    requestAnimationFrame(this.update);
  };

  gameLoop = () => {
    const { workOrders, facilities } = this.props;

    const facilitiesDoingProcessing = facilities.filter(facility => {
      return facility.processing.filter(process => process.duration > 0).length > 0;
    });

    workOrders.forEach(workOrder => {
      this.props.updateWorkOrder(workOrder, DELTA);
    });

    facilitiesDoingProcessing.forEach(facility => {
      this.props.updateFacilityProcessing(facility, DELTA);
    });
  };

  handleResourceSelection = resource => {
    const { selection } = this.state;

    if (!selection) {
      this.setState({ selection: resource });
      return;
    }

    if (resource.id === selection.id) {
      this.setState({ selection: null });
      return;
    }

    this.setState({ selection: resource });
  };

  facilityClick = facility => {
    const { selection } = this.state;

    this.props.tryTakeProduct(facility);

    if (!selection) {
      return;
    }

    this.props.startProcessing(facility, selection);
    this.setState({ selection: null });
  };

  workOrderClick = workOrder => {
    const { inventory } = this.props;
    const itemRequired = inventory.find(item => item.name === workOrder.item.name);

    if (itemRequired) {
      this.props.completeWorkOrder(workOrder, itemRequired);
    }
  };

  render() {
    const { workOrders, resources, facilities, inventory } = this.props;
    const { selection } = this.state;

    return (
      <div>
        <WorkOrdersContainer>
          {workOrders
            .filter(workOrder => workOrder.duration > 0)
            .map((workOrder, i) => (
              <WorkOrder
                key={`wo${i}`}
                handleWorkOrderClick={this.workOrderClick}
                workOrder={workOrder}
                inventory={inventory}
              />
            ))}
        </WorkOrdersContainer>
        <ResourcesContainer>
          {resources.map((resource, i) => (
            <ResourceButton
              key={`r${i}`}
              selection={selection}
              isSelected={selection && selection.id === resource.id}
              onClick={() => this.handleResourceSelection(resource)}
            >
              {resource.name}
            </ResourceButton>
          ))}
        </ResourcesContainer>
        <FacilitiesContainer>
          {facilities.map((facility, i) => (
            <Facility key={`f${i}`} facility={facility} handleFacilityClick={this.facilityClick} />
          ))}
        </FacilitiesContainer>
        <InventoryContainer>
          {inventory.map((item, i) => (
            <InventoryItem
              handleItemClick={this.handleResourceSelection}
              isSelected={selection && selection.id === item.id}
              key={`item${i}`}
              item={item}
            />
          ))}
        </InventoryContainer>
      </div>
    );
  }
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 16px;
`;
const WorkOrdersContainer = FlexRow.extend``;
const ResourcesContainer = FlexRow.extend`
  pointer-events: ${props => (props.disabled ? "none" : "initial")};
`;
const FacilitiesContainer = FlexRow.extend``;
const InventoryContainer = FlexRow.extend`
  flex-direction: column;
  backgrounf: #efefef;
`;

const ResourceButton = styled.button`
  background: ${props => (props.selection ? "tomato" : "green")};
  border: ${props => (props.isSelected ? "1px solid cyan" : "none")};

  padding: 8px 16px;
  margin: 16px;

  outline: none;
  cursor: pointer;
`;
