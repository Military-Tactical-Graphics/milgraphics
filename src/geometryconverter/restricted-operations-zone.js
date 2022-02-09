var ms = require("milsymbol");

// Draws a ROZ
module.exports = function (feature) {
  var annotations = {
    geometry: {
      type: "Point"
    },
    properties: {
      text: "ROZ"
    }
  };
  var points = feature.geometry.coordinates;

  if (points[0].length >= 3) {

    if (feature.properties.name)
      annotations.properties.text +=
      "\nName:" + feature.properties.name;
    if (feature.properties.altitudeDepth)
      annotations.properties.text +=
      "\nMIN ALT: " + feature.properties.altitudeDepth;
    if (feature.properties.altitudeDepth1)
      annotations.properties.text +=
      "\nMAX ALT: " + feature.properties.altitudeDepth1;
    if (feature.properties.timeFrom)
      annotations.properties.text += "\nTime from: " + feature.properties.timeFrom;
    if (feature.properties.timeTo)
      annotations.properties.text += "\nTime to:" + feature.properties.timeTo;

    var polygon = ms.geometry.circleCorridorPolygon(feature);

    geometry = polygon.geometry;
    if (polygon.annotation.hasOwnProperty("geometry")) {
      annotations.geometry = polygon.annotation.geometry;
    }

  } else {
    alert("Not enough coordinates. This graphic requires at least 3 anchor points.");
  }

  return {
    geometry: polygon.geometry,
    annotations: [annotations]
  };
};
