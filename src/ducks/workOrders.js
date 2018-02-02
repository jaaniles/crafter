import { List, Map } from "immutable";

import workOrderService from "../services/workOrder";

const defaultState = Map({
  workOrders: List()
});

export function addWorkOrder(duration) {
  return {
    type: "ADD_WORK_ORDER",
    payload: workOrderService.createWorkOrder(duration)
  };
}

export function updateWorkOrder(workOrder, DELTA) {
  return {
    type: "UPDATE_WORK_ORDER",
    payload: {
      ...workOrder,
      duration: workOrder.duration - 1 * DELTA
    }
  };
}

export function completeWorkOrder(workOrder, item) {
  return {
    type: "COMPLETE_WORK_ORDER",
    payload: {
      workOrder,
      item
    }
  };
}

export default function workOrderReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_WORK_ORDER":
      return state.update("workOrders", workOrders => workOrders.push(payload));
    case "UPDATE_WORK_ORDER":
      return state.update("workOrders", workOrders =>
        workOrders.map(workOrder => {
          if (workOrder.id === payload.id) {
            return payload;
          }
          return workOrder;
        })
      );
    case "COMPLETE_WORK_ORDER":
      return state.update("workOrders", workOrders =>
        workOrders.filter(workOrder => workOrder.id !== payload.workOrder.id)
      );
    default:
      return state;
  }
}
