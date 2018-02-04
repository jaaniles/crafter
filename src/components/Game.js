import React, { Component } from "react";
import Flex from "./Layout/Flex";

import WorkOrder from "./GameComponents/WorkOrder";
import ResourcesContainer from "./GameContainers/ResourcesContainer";
import FacilitiesContainer from "./GameContainers/FacilitiesContainer";
import InventoryContainer from "./GameContainers/InventoryContainer";

const DELTA = 0.0167;

export default class Game extends Component {
  state = {
    selection: null
  };

  componentWillMount() {
    this.props.addWorkOrder(100);
    this.props.addWorkOrder(100);
    this.props.addWorkOrder(100);

    this.props.addResource("woodLog");
    this.props.addResource("ore");
    this.props.addResource("ore");
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

  resourceClick = resource => {
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
      <GameContainer>
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
        <Container>
          <FacilitiesContainer facilities={facilities} handleFacilityClick={this.facilityClick} />
          <ResourcesContainer
            selection={selection}
            handleResourceClick={this.resourceClick}
            resources={resources}
          />
        </Container>
        <InventoryContainer
          handleItemClick={this.resourceClick}
          inventory={inventory}
          selection={selection}
        />
      </GameContainer>
    );
  }
}

const GameContainer = Flex.extend`
  flex-direction: column;
`;
const WorkOrdersContainer = Flex.extend`
  background: rgba(255, 255, 255, 0.8);
`;
const Container = GameContainer.extend`
  margin-top: 32px;
  background: rgba(255, 255, 255, 0.8);
  padding: 16px;

  min-height: 500px;
`;
