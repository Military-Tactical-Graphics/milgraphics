import ms from '../../index';

function circularTarget(feature) {
  const annotations = {
    geometry: { type: "Point" },
    properties: { text: feature.properties.name, align: 'center' }
  };

  const circle = ms.geometry.circle(feature);

  return { geometry: circle.geometry, annotations: [annotations] };
};

export default circularTarget;