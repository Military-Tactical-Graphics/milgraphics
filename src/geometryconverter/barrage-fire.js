import ms from '../../index';

export default function (feature) {
  var annotations = [];
  var geometry = {
    type: "MultiLineString",
    coordinates: []
  };
  var points = feature.geometry.coordinates;
  var bearing = ms.geometry.bearingBetween(points[0], points[1]) % 180;
  const scale = ms.geometry.distanceBetween(points[0], points[1]) * 0.2;
  var centerPoint;
  // if odd number of vertices, put on central vertex
  if (points.length % 2 !== 0) {
    centerPoint = points[parseInt(points.length / 2)];
  } else {
    centerPoint = ms.geometry.pointBetween(
      points[parseInt(points.length / 2) - 1],
      points[parseInt(points.length / 2)],
      0.5
    );
  }
  var annotTopPos = ms.geometry.toDistanceBearing(centerPoint, scale, bearing - 90); //annotation above the line
  var annotUndPos = ms.geometry.toDistanceBearing(centerPoint, scale, bearing + 90); //annotation below the line

  var geom = [];

  for (let a = 1; a < points.length; a++) {

    geom = [
      ms.geometry.toDistanceBearing(points[a - 1], 0, bearing),
      ms.geometry.toDistanceBearing(points[a], 0, bearing)
    ];
    geometry.coordinates.push(geom);
  }


  geom = [
    ms.geometry.toDistanceBearing(points[0], scale, bearing + 90), // Right end
    ms.geometry.toDistanceBearing(points[0], scale, bearing - 90) // Left end

  ];
  geometry.coordinates.push(geom);
  geom = [
    ms.geometry.toDistanceBearing(points.slice(-1)[0], scale, bearing + 90), // Right end
    ms.geometry.toDistanceBearing(points.slice(-1)[0], scale, bearing - 90) // Left end
  ];
  geometry.coordinates.push(geom);

  const OPTION = { angle: bearing - 90, align: 'center' };

  if (feature.properties.uniqueDesignation) {
    annotations.push(ms.geometry.addAnnotation(annotTopPos, feature.properties.uniqueDesignation, OPTION));
  }
  if (feature.properties.weaponSystemType) {
    annotations.push(ms.geometry.addAnnotation(annotUndPos, feature.properties.weaponSystemType, OPTION));
  }

  return {
    geometry: geometry,
    annotations: annotations
  };

};