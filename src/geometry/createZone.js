import ms from '../../index';

function createZone(feature, text, newLineUniq = false, insideLabel = false) {
  let annotations = [];
  let annotation1 = {
    geometry: { type: "Point" },
    properties: { text, align: 'center' }
  };

  let polygon = ms.geometry.circleCorridorPolygon(feature);

  if (feature.properties.uniqueDesignation) {
    if (newLineUniq) {
      annotation1.properties.text += `\n${feature.properties.uniqueDesignation}`
    } else {
      annotation1.properties.text += ` ${feature.properties.uniqueDesignation}`; 
    }
  }
  
  let TEXT = '';

  if (feature.properties.dtg) {
    TEXT = feature.properties.dtg;
  }
  if (feature.properties.dtg1) {
    TEXT += `${feature.properties.dtg ? '-' : '' }${newLineUniq ? '\n' : ''}${feature.properties.dtg1}`;
  }

  if (insideLabel) {
    annotation1.properties.text += `\n${TEXT}`;
  }

  annotations.push(annotation1);

  if (TEXT && !insideLabel) {
      let annotation2 = {
        geometry: { type: "Point" },
        properties: { text: TEXT, align: 'center' }
      };
      let POINT = ms.geometry.toDistanceBearing(ms.geometry.getLeftPoint(polygon.geometry.coordinates[0]), 100, 275);
      annotation2.geometry.coordinates = POINT;
      annotation2.properties.align = 'right';
      annotations.push(annotation2);
  }

  return { geometry: polygon.geometry, annotations };
};

export default createZone;
