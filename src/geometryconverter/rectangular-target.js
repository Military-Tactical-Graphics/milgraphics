import ms from '../../index';
import { geometry } from '../geometry';

export default function(feature) {
  const points = feature.geometry.coordinates;
  var annotations = {
    geometry: { type: "Point" },
    properties: {
      text: feature.properties.uniqueDesignation || '',
      align: 'center',
    }
  };
  const P1 = ms.geometry.toDistanceBearing(points, feature.properties.distance1 / 2, 270 + feature.properties.attitude || 0);
  const P2 = ms.geometry.toDistanceBearing(points, feature.properties.distance1 / 2, 90 + feature.properties.attitude || 0);
  annotations.properties.angle = ms.geometry.bearingBetween(P1, P2) % 180 - 90;
  

  var rectangle = ms.geometry.corridor({
    geometry: {
      type: 'LineString',
      coordinates: [P1, P2]
    },
    properties: feature.properties
  });
  annotations.geometry.coordinates = geometry.centerPolygon(rectangle);

  return { geometry: rectangle.geometry, annotations: [annotations] };
};
