var ms = require("milsymbol");

//DRAWS WFZ
module.exports = function (feature) {
  var annotations = {
    geometry: {
      type: "Point"
    },
    properties: {
      text: "WFZ\n"
    }
  };
  var points = feature.geometry.coordinates;

  feature.properties.fill = "dashes";

  if (points[0].length >= 3) {

    if (feature.properties.name)
      annotations.properties.text += feature.properties.name;
    if (feature.properties.dtg)
      annotations.properties.text += "\nTime from: " + feature.properties.dtg;
    if (feature.properties.dtg1)
      annotations.properties.text += "\nTime to:" + feature.properties.dtg1;

    var polygon = ms.geometry.circleCorridorPolygon(feature);

    geometry = polygon.geometry;
    if (polygon.annotation.hasOwnProperty("geometry")) {
      annotations.geometry = polygon.annotation.geometry;
    }
  }

  return {
    geometry: polygon.geometry,
    annotations: [annotations]
  };
};
