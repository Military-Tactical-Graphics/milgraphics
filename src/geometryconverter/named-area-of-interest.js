import ms from '../../index';

// Draws a NAI
export default function(feature) {
  var geometry;
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "NAI", align: 'center' }
  };
  if (feature.properties.uniqueDesignation)
    annotations.properties.text += `\n${feature.properties.uniqueDesignation}`;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;

  return { geometry: polygon.geometry, annotations: [annotations] };
};
