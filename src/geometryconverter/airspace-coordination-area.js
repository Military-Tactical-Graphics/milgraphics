var ms = require("milsymbol");

// Draws a NAI
function airspaceCoordinationArea(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "ACA" }
  };
  if (feature.properties.uniqueDesignation)
    annotations.properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.altitudeDepth)
    annotations.properties.text +=
      "\nMIN ALT: " + feature.properties.altitudeDepth;
  if (feature.properties.altitudeDepth1)
    annotations.properties.text +=
      "\nMAX ALT: " + feature.properties.altitudeDepth1;
  if (feature.properties.additionalInformation)
    annotations.properties.text +=
      "\nGrids " + feature.properties.additionalInformation;
  if (feature.properties.dtg)
    annotations.properties.text += "\nEFF: " + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations.properties.text += "\n- " + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations.geometry = polygon.annotation.geometry;
  }

  return {
    geometry: polygon.geometry,
    annotations: [annotations]};
};

module.exports = airspaceCoordinationArea;