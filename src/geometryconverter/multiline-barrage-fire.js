import ms from '../../index';

export default function (feature) {
  const annotations = [];
  const geometry = {
    type: "MultiLineString",
    coordinates: []
  };
  const points = feature.geometry.coordinates;
  const bearing = ms.geometry.bearingBetween(points[0], points[1]);
  const scale = ms.geometry.distanceBetween(points[0], points[1]) * 0.15;
  const distance = feature.properties.distance; //distance between lines
  let annotTopPos;
  let angle = 0;

  let geom = [];
  let geomBot = []; //geometry for bottom line

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

  // if odd number of vertices, put on central vertex
  if (points.length % 2 !== 0) {
    const PI = parseInt(points.length / 2);

    const A1 = ms.geometry.bearingBetween(points[PI - 1], points[PI]);
    const A2 = ms.geometry.bearingBetween(points[PI], points[PI + 1]);
    angle = ((A1 + A2) / 2) - 90;
    annotTopPos = ms.geometry.toDistanceBearing(geometry.coordinates[0][PI], distance * .35, angle);
  } else {
    const P1 = points[parseInt(points.length / 2) - 1];
    const P2 = points[parseInt(points.length / 2)];
    angle = ms.geometry.bearingBetween(P1, P2) - 90;
    annotTopPos = ms.geometry.toDistanceBearing(ms.geometry.pointBetween(
      points[parseInt(points.length / 2) - 1],
      points[parseInt(points.length / 2)],
      0.5
    ), distance * 1.5, bearing - 90);
  }

  [points[0], points.slice(-1)[0]].forEach((curPoint) => {
    const PT = ms.geometry.toDistanceBearing(curPoint, scale, bearing + 90);
    const PD = ms.geometry.toDistanceBearing(curPoint, scale, bearing - 90);
    geom = [
      ms.geometry.toDistanceBearing(PT, distance, bearing - 90),
      ms.geometry.toDistanceBearing(PD, distance, bearing - 90)
    ];
    geomBot = [
      ms.geometry.toDistanceBearing(PT, distance, bearing + 90),
      ms.geometry.toDistanceBearing(PD, distance, bearing + 90)
    ];
    geometry.coordinates.push(geom, geomBot);
  });
  
  if (feature.properties.uniqueDesignation) {
    annotations.push(ms.geometry.addAnnotation(annotTopPos, feature.properties.uniqueDesignation, { align: 'center', angle }));
  }

  return {
    geometry: geometry,
    annotations: annotations
  };

};
