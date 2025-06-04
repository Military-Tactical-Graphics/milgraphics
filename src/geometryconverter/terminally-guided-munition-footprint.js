import ms from '../../index';
import { geometry } from '../geometry';

export default function(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "TGMF" }
  };
  var polygon = ms.geometry.circleCorridorPolygon(feature);
  annotations.geometry.coordinates = geometry.centerPolygon(polygon);
  return { geometry: polygon.geometry, annotations: [annotations] };
};
