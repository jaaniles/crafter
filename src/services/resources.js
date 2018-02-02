import uuid from "uuid";
import resources from "../constants/resources";

function createResource(resource) {
  return {
    ...resources[resource],
    id: uuid()
  };
}

export default {
  createResource
};
