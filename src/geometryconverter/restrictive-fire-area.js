import ms from '../../index';

// Draws a Fire Support Area
export default function(feature) {
  var annotations = {
    geometry: { type: "Point" },
    properties: { text: "RFA" }
  };
  if (feature.properties.name)
    annotations.properties.text +=
      "\n" + feature.properties.name;
  if (feature.properties.dtg)
    annotations.properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations.properties.text += " - " + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  
  return { geometry: polygon.geometry, annotations: [annotations] };
};
