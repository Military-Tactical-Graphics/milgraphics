var ms = require("milsymbol");

function circularTarget(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: feature.properties.name }
  };

  var circle = ms.geometry.circle(feature);


  return { geometry: circle.geometry, annotations: [annotations] };
};

module.exports = circularTarget;