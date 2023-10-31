import ms from '../../index';

//DRAWS WFZ
export default function (feature) {
  var geometry;
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

    if (feature.properties.uniqueDesignation)
      annotations.properties.text += feature.properties.uniqueDesignation;
    if (feature.properties.dtg)
      annotations.properties.text += "\nTIME FROM: " + feature.properties.dtg;
    if (feature.properties.dtg1)
      annotations.properties.text += "\nTIME TO:" + feature.properties.dtg1;

    var polygon = ms.geometry.circleCorridorPolygon(feature);

    geometry = polygon.geometry;
  }

  return {
    geometry: polygon.geometry,
    annotations: [annotations]
  };
};
