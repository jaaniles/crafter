export default function getGridArea(i) {
  switch (i) {
    case 0:
      return "top";
    case 1:
      return "left";
    case 2:
      return "right";
    case 3:
      return "bottom";
    case 4:
      return "middle";
    case 5:
      return "topleft";
    case 6:
      return "topright";
    case 7:
      return "bottomleft";
    case 8:
      return "bottomright";
    default:
      return "bottom";
  }
}
