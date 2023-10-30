import ms from '../../index';

function createZone(feature, text, newLineUniq = false) {
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
  annotations.push(annotation1);

  if (feature.properties.dtg || feature.properties.dtg1) {
    
    let POINT = ms.geometry.toDistanceBearing(ms.geometry.getLeftPoint(polygon.geometry.coordinates[0]), 100, 275);
    let annotation2 = {
      geometry: { type: "Point", coordinates: POINT },
      properties: { text: "", align: 'right' }
    };

    if (feature.properties.dtg) {
      annotation2.properties.text = feature.properties.dtg;
    }
    if (feature.properties.dtg1) {
      annotation2.properties.text
        += `${feature.properties.dtg ? '-' : '' }${newLineUniq ? '\n' : ''}${feature.properties.dtg1}`;
    }
    annotations.push(annotation2);
  }

  return { geometry: polygon.geometry, annotations };
};

export default createZone;
