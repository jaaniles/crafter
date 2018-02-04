import IRON_ORE_ICON from "../assets/icons/iron_ore.png";
import IRON_INGOT_ICON from "../assets/icons/iron_ingot.png";
import OAK_ICON from "../assets/icons/oak.png";
import LOGS_ICON from "../assets/icons/logs.png";

export default {
  woodLog: {
    name: "Oak",
    duration: 20,
    icon: OAK_ICON
  },
  ore: {
    name: "Ore",
    duration: 2,
    icon: IRON_ORE_ICON
  },
  wood: {
    name: "Wood",
    consumable: true,
    duration: 8,
    icon: LOGS_ICON
  },
  ingot: {
    name: "Ingot",
    consumable: true,
    duration: 3,
    icon: IRON_INGOT_ICON
  }
};
