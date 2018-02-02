import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { compose } from "recompose";

import Game from "../Game";
import { addWorkOrder, updateWorkOrder, completeWorkOrder } from "../../ducks/workOrders";
import { addResource } from "../../ducks/resources";
import {
  addFacility,
  startProcessing,
  updateFacilityProcessing,
  tryTakeProduct
} from "../../ducks/facilities";
import { addToInventory } from "../../ducks/inventory";

export default compose(
  withRouter,
  connect(
    state => ({
      workOrders: state.workOrders.get("workOrders"),
      resources: state.resources.get("resources"),
      facilities: state.facilities.get("facilities"),
      inventory: state.inventory.get("inventory")
    }),
    dispatch =>
      bindActionCreators(
        {
          addWorkOrder,
          updateWorkOrder,
          addResource,
          addFacility,
          startProcessing,
          updateFacilityProcessing,
          addToInventory,
          tryTakeProduct,
          completeWorkOrder
        },
        dispatch
      )
  )
)(Game);
