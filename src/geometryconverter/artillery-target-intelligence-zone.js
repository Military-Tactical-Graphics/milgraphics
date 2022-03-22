var ms = require("milsymbol");

function artilleryTargetIntelligenceZone(feature) {
  var annotations = {};

  annotations.geometry = { type: "Point" };
  annotations.properties = { text: "ATI" };
  if (feature.properties.uniqueDesignation)
    annotations.properties.text +=
      " " + feature.properties.uniqueDesignation;
  /*if (feature.properties.dtg)
    annotations.properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations.properties.text += "\n" + feature.properties.dtg1;*/

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations.geometry = polygon.annotation.geometry;
  }

  return { geometry: polygon.geometry, annotations: [annotations] };
};

module.exports = artilleryTargetIntelligenceZone;