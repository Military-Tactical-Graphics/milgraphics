var ms = require("milsymbol");

module.exports = function (feature) {
  var annotations = [];
  var geometry = {
    type: "MultiLineString",
    coordinates: []
  };
  var points = feature.geometry.coordinates;
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);;
  var size = 500;
  var distance = feature.properties.distance; //distance between lines
  var annotTopPos;  

      // if odd number of vertices, put on central vertex
      if (points.length % 2 !== 0) {
        annotTopPos = ms.geometry.toDistanceBearing(points[parseInt(points.length / 2)], distance * 1.5 ,  bearing - 90);
    } else {
      annotTopPos = ms.geometry.toDistanceBearing(ms.geometry.pointBetween(
            points[parseInt(points.length / 2) - 1],
            points[parseInt(points.length / 2)],
            0.5
        ), distance * 1.5 ,  bearing - 90);
    }
   

  var geom = [];
  var geomBot = []; //geometry for bottom line

  for (let a = 1; a < points.length; a++) {

    geom = [
      ms.geometry.toDistanceBearing(points[a - 1], distance, bearing - 90),
      ms.geometry.toDistanceBearing(points[a], distance, bearing - 90)
    ];
    geomBot = [
      ms.geometry.toDistanceBearing(points[a - 1], distance, bearing + 90),
      ms.geometry.toDistanceBearing(points[a], distance, bearing + 90)
    ];
    geometry.coordinates.push(geom, geomBot);
  }

  geom = [
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], size, bearing + 90), distance, bearing - 90),
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], size, bearing - 90), distance, bearing - 90)
  ];
  geomBot = [
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], size, bearing + 90), distance, bearing + 90),
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], size, bearing - 90), distance, bearing + 90)
  ];
  geometry.coordinates.push(geom, geomBot);
  
  geom = [
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], size, bearing + 90), distance, bearing - 90),
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], size, bearing - 90), distance, bearing - 90)
  ];
  geomBot = [
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], size, bearing + 90), distance, bearing + 90),
    ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], size, bearing - 90), distance, bearing + 90)
  ];
  geometry.coordinates.push(geom, geomBot);
  if (feature.properties.name) {
    annotations.push(ms.geometry.addAnnotation(annotTopPos, feature.properties.name));
  }


  return {
    geometry: geometry,
    annotations: annotations
  };

};
