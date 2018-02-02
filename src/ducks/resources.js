import { List, Map } from "immutable";

import resourcesService from "../services/resources";

const defaultState = Map({
  resources: List()
});

export function addResource(resource) {
  return {
    type: "ADD_RESOURCE",
    payload: resourcesService.createResource(resource)
  };
}

export default function workOrderReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_RESOURCE":
      return state.update("resources", resources => resources.push(payload));
    default:
      return state;
  }
}
