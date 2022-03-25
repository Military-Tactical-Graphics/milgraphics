import ms from '../../index';

export default function(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "TGMF" }
  };
  var polygon = ms.geometry.circleCorridorPolygon(feature);

  return { geometry: polygon.geometry, annotations: [annotations] };
};
