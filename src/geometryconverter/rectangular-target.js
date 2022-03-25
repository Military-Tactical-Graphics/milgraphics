import ms from '../../index';

export default function(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: feature.properties.name }
  };
  
  var rectangle = ms.geometry.corridor(feature);

  return { geometry: rectangle.geometry, annotations: [annotations] };
};
