import ms from '../../index';

// Draws a NAI
function targetedAreaOfInterest(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "TAI" }
  };
  if (feature.properties.uniqueDesignation)
    annotations.properties.text +=
      "\n" + feature.properties.uniqueDesignation;

  var polygon = ms.geometry.circleCorridorPolygon(feature);

  return { geometry: polygon.geometry, annotations: [annotations] };
};

export default targetedAreaOfInterest;