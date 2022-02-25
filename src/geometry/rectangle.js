var ms = require("milsymbol");

// Draws rectangle from input feature
function rectangle(feature) {
  // A rectangle is just a two point corridor
  return ms.geometry.corridor(feature);
};

export default rectangle;