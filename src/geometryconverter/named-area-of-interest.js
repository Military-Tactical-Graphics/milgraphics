import ms from '../../index';
import { geometry } from '../geometry';

// Draws a NAI
export default function(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "NAI", align: 'center' }
  };
  if (feature.properties.uniqueDesignation)
    annotations.properties.text += `\n${feature.properties.uniqueDesignation}`;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  annotations.geometry.coordinates = geometry.centerPolygon(polygon);

  return { geometry: polygon.geometry, annotations: [annotations] };
};
