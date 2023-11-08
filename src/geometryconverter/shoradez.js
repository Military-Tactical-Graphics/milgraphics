import ms from '../../index';

// Draws a SHORADEZ
export default function (feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "SHORADEZ" }
  };

  const labels = {
    [feature.properties.uniqueDesignation]: ' ',
    'MIN ALT:': feature.properties.altitudeDepth,
    'MAX ALT:': feature.properties.altitudeDepth1,
    'TIME FROM:': `${feature.properties.dtg}`,
    'TIME TO:': feature.properties.dtg1
  };

  Object.keys(labels).forEach((label) => {
    if (labels[label] && labels[label] !== '') {
      const TXT = `\n${label}`;
      annotations.properties.text += `${TXT} ${labels[label]}`;
    }
  })

  var polygon = ms.geometry.circleCorridorPolygon(feature);

  return {
    geometry: polygon.geometry,
    annotations: [annotations]
  };
};

