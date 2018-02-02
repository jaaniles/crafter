import uuid from "uuid";

import facilities from "../constants/facilities";

function createFacility(facility) {
  return {
    ...facilities[facility], // contains facility-specific info
    id: uuid(),
    processing: []
  };
}

function startProcessingResource(facility, resource) {
  return {
    ...facility,
    processing: facility.processing.concat(resource)
  };
}

function updateProcessing(facility, DELTA) {
  const { processing } = facility;

  const processIndex = processing.findIndex(process => process.duration > 0);
  const newDuration = processing[processIndex].duration - 1 * DELTA;

  const updatedProcess = {
    ...processing[processIndex],
    duration: newDuration
  };

  return {
    ...facility,
    processing: Object.assign([], facility.processing, { [processIndex]: updatedProcess })
  };
}

function completeProcessing(facility) {
  const produces = facility.produces.map(product => createProduct(product));

  return {
    facility: {
      ...facility,
      processing: facility.processing.filter(product => product.duration >= 0)
    },
    produces
  };
}

function createProduct(product) {
  return {
    ...product,
    id: uuid()
  };
}

export default {
  createFacility,
  startProcessingResource,
  updateProcessing,
  completeProcessing
};
