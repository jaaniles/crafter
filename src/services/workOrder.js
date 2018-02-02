import uuid from "uuid";

import items from "../constants/items";

function createItem(item) {
  return {
    ...item,
    id: uuid()
  };
}

function createWorkOrder(duration) {
  return {
    id: uuid(),
    item: createItem(items.sword),
    duration: duration
  };
}

export default {
  createWorkOrder
};
