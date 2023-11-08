import ms from '../../index';

export const labeledLine = (feature, text, uniqFirst = false) => {
  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString", coordinates: [] };

  var annotations = [];
  var annotationTop = text;
  var annotationUnder = "";

  if (feature.properties.uniqueDesignation)
    if (uniqFirst) {
      annotationTop = `${feature.properties.uniqueDesignation} ${annotationTop}`;
    } else {
      annotationTop = `${annotationTop} ${feature.properties.uniqueDesignation}`;
    }
    
  if (feature.properties.dtg)
    annotationUnder += feature.properties.dtg;
  if (feature.properties.dtg1)
    annotationUnder += `-${feature.properties.dtg1}`;

  geometry.coordinates = [points];
  const A1 = ms.geometry.bearingBetween(points[0], points[1]) % 180 - 90;
  const LAST_TWO = points.slice(-2);
  const A2 = ms.geometry.bearingBetween(LAST_TWO[0], LAST_TWO[1]) % 180 - 90;

  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(points[0], 70, A1 + 45), annotationTop, { align: 'left', angle: A1 }));
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(LAST_TWO[1], 70, A1 - 45), annotationTop, { align: 'right', angle: A2 }));

  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(points[0], -70, A1 - 45), annotationUnder, { align: 'left', angle: A1 }));
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(LAST_TWO[1], -70, A2 + 45), annotationUnder, { align: 'right', angle: A2 }));

  const TEXT = `PL ${feature.properties?.uniqueDesignation1 || ''}`
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(points[0], 70, A1 - 90), TEXT, { align: 'right', angle: A1 }));
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(LAST_TWO[1], 70, A2 + 90), TEXT, { align: 'left', angle: A2 }));

  return { geometry: geometry, annotations: annotations };
}