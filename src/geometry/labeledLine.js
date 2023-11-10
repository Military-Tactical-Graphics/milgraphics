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
  const A1 = ms.geometry.bearingBetween(points[0], points[1]);
  const LAST_TWO = points.slice(-2);
  const A2 = ms.geometry.bearingBetween(LAST_TWO[0], LAST_TWO[1]);

  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(points[0], 70, A1 > 180 ? A1 + 45 : A1 - 45), annotationTop, { align: A1 > 180 ? 'right' : 'left', angle: (A1 % 180) - 90 }));
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(LAST_TWO[1], 70, A2 > 180 ? A2 + 135 : A2 - 135), annotationTop, { align: A2 > 180 ? 'left' : 'right', angle: (A2 % 180) - 90 }));

  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(points[0], 70, A1 > 180 ? A1 - 45 : A1 + 45), annotationUnder, { align: A1 > 180 ? 'right' : 'left', angle: (A1 % 180) - 90  }));
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(LAST_TWO[1], 70, A2 > 180 ? A2 - 135 : A2 + 135), annotationUnder, { align: A2 > 180 ? 'left' : 'right', angle: (A2 % 180) - 90 }));


  const TEXT = `PL ${feature.properties?.uniqueDesignation1 || ''}`
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(points[0], 70, A1 > 180 ? A1 - 180 : A1 + 180), TEXT, { align: A1 > 180 ? 'left' : 'right', angle: A1 % 180 - 90 }));
  annotations.push(ms.geometry.addAnnotation(
    ms.geometry.toDistanceBearing(LAST_TWO[1], 70, A2), TEXT, { align: A2 > 180 ? 'right' : 'left', angle: A2 % 180 - 90 }));

  return { geometry: geometry, annotations: annotations };
}