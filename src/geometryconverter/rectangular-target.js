import ms from '../../index';

export default function(feature) {
  const points = feature.geometry.coordinates;
  var annotations = {
    geometry: { type: "Point" },
    properties: {
      text: feature.properties.name,
      align: 'center',
      angle: ms.geometry.bearingBetween(points[0], points[1]) - 90
    }
  };
  
  var rectangle = ms.geometry.corridor(feature);

  return { geometry: rectangle.geometry, annotations: [annotations] };
};
