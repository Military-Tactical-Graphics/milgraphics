import ms from '../../index';

// Draws a ROZ
export default function (feature) {
  var geometry;
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
    if (feature.properties.dtg)
      annotations.properties.text += "\nTime from: " + feature.properties.dtg;
    if (feature.properties.dtg1)
      annotations.properties.text += "\nTime to:" + feature.properties.dtg1;

    var polygon = ms.geometry.circleCorridorPolygon(feature);
    geometry = polygon.geometry;

  } else {
    alert("Not enough coordinates. This graphic requires at least 3 anchor points.");
  }

  return {
    geometry: polygon.geometry,
    annotations: [annotations]
  };
};
