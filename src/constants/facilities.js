import resources from "./resources";
import items from "./items";

export default {
  forge: {
    name: "Forge",
    requires: [resources.ore, resources.ore],
    produces: [resources.ingot, resources.ingot, resources.ingot]
  },
  lumberjack: {
    name: "Lumberjack",
    requires: [resources.woodLog],
    produces: [resources.wood]
  },
  anvil: {
    name: "Anvil",
    requires: [resources.ingot, resources.ingot],
    produces: [items.sword, items.sword]
  }
};
