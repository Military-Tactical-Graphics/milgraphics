import ms from '../../index';
import { geometry } from '../geometry';

function circularTarget(feature) {
  const annotations = {
    geometry: { type: "Point" },
    properties: { text: `${feature.properties?.uniqueDesignation || ''}`, align: 'center' }
  };

  const circle = ms.geometry.circle(feature);
  annotations.geometry.coordinates = geometry.centerPolygon(circle);

  return { geometry: circle.geometry, annotations: [annotations] };
};

export default circularTarget;