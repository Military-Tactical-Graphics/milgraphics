var ms = require("milsymbol");

export function createAreas(feature, text) {
  var annotations = [];
  var points = feature.geometry.coordinates;
  var annotationText = text;
  var shape;

  if (feature.geometry.type == "Point") {
    [0, 90, 180, 270].forEach(angle =>
      annotations.push(
        ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(
          points, feature.properties.distance, angle), annotationText)
      ));
    shape = ms.geometry.circleCorridorPolygon(feature);
  }

  if (feature.geometry.type == "LineString") {
    shape = ms.geometry.circleCorridorPolygon(feature);
    var rectangle = [...shape.geometry.coordinates[0], shape.geometry.coordinates[0][0]];
    for (var i = 0; i < rectangle.length - 1; i++) {
      annotations.push(
        ms.geometry.addAnnotation(
          ms.geometry.pointBetween(rectangle[i], rectangle[i + 1], 0.5),
          annotationText
        ));
    }
  }

  if (feature.geometry.type == "Polygon") {
    var maxLatitudes = Math.max.apply(null, getLatLong(points).latitudes);
    var maxLongitudes = Math.max.apply(null, getLatLong(points).longitudes);
    var minLatitudes = Math.min.apply(null, getLatLong(points).latitudes);
    var minLongitudes = Math.min.apply(null, getLatLong(points).longitudes);

    for (var a = 0; a < points[0].length; a++) {
      if (points[0][a][0] == minLatitudes) {
        annotations.push(ms.geometry.addAnnotation(points[0][a], annotationText));
      }
      if (points[0][a][0] == maxLatitudes) {
        annotations.push(ms.geometry.addAnnotation(points[0][a], annotationText));
      }
      if (points[0][a][1] == minLongitudes) {
        annotations.push(ms.geometry.addAnnotation(points[0][a], annotationText));
      }
      if (points[0][a][1] == maxLongitudes) {
        annotations.push(ms.geometry.addAnnotation(points[0][a], annotationText));
      }
    }
    shape = ms.geometry.circleCorridorPolygon(feature);
  }

  return {
    geometry: shape.geometry,
    annotations: annotations
  };
}

function getLatLong(array) {
  var latitudes = [];
  var longitudes = [];

  for (var i = 0; i < array[0].length; i++) {
    latitudes.push(array[0][i][0]);
    longitudes.push(array[0][i][1]);
  }

  return { latitudes, longitudes };
};