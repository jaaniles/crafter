import uuid from "uuid";
import resources from "../constants/resources";

function createResource(resource) {
  return {
    ...resources[resource],
    maxDuration: resources[resource].duration,
    id: uuid()
  };
}

export default {
  createResource
};
