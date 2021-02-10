var ms = require("milsymbol");

function flot(feature) {
  //var direction, width;
  var annotations = [{}];
  var points = feature.geometry.coordinates;

  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [];

  var geometry1 = [];
  geometry1.push(points[0],points[1],points[2],points[3]);

/*  var geometry2 = [];
  var midpoint = ms.geometry.pointBetween(points[0], points[1], 0.5);
  geometry2.push(points[2], points[3], midpoint);
*/
  geometry.coordinates = [geometry1];
  
  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "FLOT";
  annotations[0].geometry.coordinates = ms.geometry.pointBetween(
    points[1],
    points[2],
    0.5
  );

  return { geometry: geometry, annotations: annotations };
}

module.exports = flot;
