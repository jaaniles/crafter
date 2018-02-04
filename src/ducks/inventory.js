import { List, Map } from "immutable";

const defaultState = Map({
  inventory: List()
});

export function addToInventory(item) {
  return {
    type: "ADD_TO_INVENTORY",
    payload: item
  };
}

export default function workOrderReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_INVENTORY":
      return state.update("inventory", inventory => inventory.push(payload));
    case "COMPLETE_FACILITY_PROCESSING":
      return state.update("inventory", inventory => inventory.concat(...payload.produces));
    case "COMPLETE_WORK_ORDER":
      return state.update("inventory", inventory =>
        inventory.filter(item => item.id !== payload.item.id)
      );
    case "FACILITY_START_PROCESSING":
      if (payload.resource.consumable) {
        return state.update("inventory", inventory =>
          inventory.filter(item => item.id !== payload.resource.id)
        );
      }
      return state;
    default:
      return state;
  }
}
