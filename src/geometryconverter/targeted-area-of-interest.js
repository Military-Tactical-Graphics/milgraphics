import ms from '../../index';
import { geometry } from '../geometry';

// Draws a NAI
function targetedAreaOfInterest(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "TAI", align: 'center' }
  };
  if (feature.properties.uniqueDesignation)
    annotations.properties.text +=
      "\n" + feature.properties.uniqueDesignation;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  annotations.geometry.coordinates = geometry.centerPolygon(polygon);
  return { geometry: polygon.geometry, annotations: [annotations] };
};

export default targetedAreaOfInterest;