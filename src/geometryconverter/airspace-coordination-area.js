import ms from '../../index';

// Draws a NAI
function airspaceCoordinationArea(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "ACA" }
  };

  const labels = {
    [feature.properties.uniqueDesignation]: '',
    'MIN ALT:': feature.properties.altitudeDepth,
    'MAX ALT:': feature.properties.altitudeDepth1,
    'Grids': feature.properties.additionalInformation,
    'EFF:': `${feature.properties.dtg}-`,
    '    ': feature.properties.dtg1
  };

  Object.keys(labels).forEach((label) => {
    if (labels[label] !== undefined) {
      const TXT = `\n ${label}`;
      annotations.properties.text += `${TXT} ${labels[label]}`;
    }
  })


  var polygon = ms.geometry.circleCorridorPolygon(feature);

  return {
    geometry: polygon.geometry,
    annotations: [annotations]
  };
};

export default airspaceCoordinationArea;