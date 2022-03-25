import ms from '../../index';

export default function(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "CENSOR ZONE" }
  };

  if (feature.properties.uniqueDesignation)
    annotations.properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations.properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations.properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);

  return { geometry: polygon.geometry, annotations: [annotations] };
};
