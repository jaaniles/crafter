import { List, Map } from "immutable";

import facilitiesService from "../services/facilities";

const defaultState = Map({
  facilities: List()
});

export function addFacility(facility) {
  return {
    type: "ADD_FACILITY",
    payload: facilitiesService.createFacility(facility)
  };
}

export function startProcessing(facility, selection) {
  const facilityIsFull = facility.processing.length >= facility.requires.length;
  const validResource = facility.requires.filter(resource => resource.name === selection.name);

  if (validResource.length < 1 || facilityIsFull) {
    return {
      type: "FACILITY_START_PROCESSING_FAIL"
    };
  }

  return {
    type: "FACILITY_START_PROCESSING",
    payload: facilitiesService.startProcessingResource(facility, selection)
  };
}

export function updateFacilityProcessing(facility, DELTA) {
  return {
    type: "UPDATE_FACILITY_PROCESSING",
    payload: facilitiesService.updateProcessing(facility, DELTA)
  };
}

export function tryTakeProduct(facility) {
  const readyProducts = facility.processing.filter(product => product.duration < 0);

  if (readyProducts.length < facility.requires.length) {
    return {
      type: "FACILITY_FAIL_TAKE_PRODUCT"
    };
  }

  return {
    type: "COMPLETE_FACILITY_PROCESSING",
    payload: facilitiesService.completeProcessing(facility)
  };
}

export default function workOrderReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_FACILITY":
      return state.update("facilities", facilities => facilities.push(payload));
    case "UPDATE_FACILITY_PROCESSING":
    case "FACILITY_START_PROCESSING":
      return state.update("facilities", facilities =>
        facilities.map(facility => {
          if (facility.id === payload.facility.id) {
            return payload.facility;
          }
          return facility;
        })
      );
    case "COMPLETE_FACILITY_PROCESSING":
      return state.update("facilities", facilities =>
        facilities.map(facility => {
          if (facility.id === payload.facility.id) {
            return payload.facility;
          }
          return facility;
        })
      );
    default:
      return state;
  }
}
