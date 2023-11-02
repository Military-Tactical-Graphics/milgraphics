import ms from '../../index';

export function createAreas(feature, text) {
  var annotations = [];
  var points = feature.geometry.coordinates;
  var annotationText = text;
  var shape;

  if (feature.geometry.type == "Point") {
    const POINTS = [0, 90, 180, 270];
    POINTS.forEach(angle =>
      annotations.push(
        ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(
          points, feature.properties.distance, angle), annotationText, { align: 'center' })
      ));
    let geometry = {
      type: 'MultiLineString',
      coordinates: [
        [], [], [], []
      ]
    };
    let index = 0;
    for (let i = 10; i < 360; i += 10) {
      if (POINTS.includes(i)) {
        index++
      } else {
        geometry.coordinates[index].push(ms.geometry.toDistanceBearing(points, feature.properties.distance, i));
      }
    }
    shape = { geometry };
  }

  if (feature.geometry.type == "LineString") {
    const geometry = {
      type: 'MultiLineString',
      coordinates: []
    };
    const RECT = ms.geometry.circleCorridorPolygon(feature);
    var rectangle = [...RECT.geometry.coordinates[0], RECT.geometry.coordinates[0][0]];

    for (let i = 0; i < rectangle.length - 1; ++i) {
      const LINE = [rectangle[i], rectangle[i + 1]];
      const ANGLE = ms.geometry.bearingBetween(LINE[0], LINE[1]) % 180 - 90;

      geometry.coordinates.push([
        LINE[0],
        ms.geometry.pointBetween(LINE[0], LINE[1], 0.45)
      ]);
      geometry.coordinates.push([
        ms.geometry.pointBetween(LINE[0], LINE[1], 0.55),
        LINE[1]
      ]);

      annotations.push(
        ms.geometry.addAnnotation(
          ms.geometry.pointBetween(rectangle[i], rectangle[i + 1], 0.5),
          annotationText, { align: 'center', angle: ANGLE > 0 ? ANGLE - 90 : ANGLE }
        ));
    }
    shape = { geometry };
  }

  if (feature.geometry.type == "Polygon") {
  

    const geometry = {
      type: 'MultiLineString',
      coordinates: []
    };

    var maxLatitudes = Math.max.apply(null, getLatLong(points).latitudes);
    var maxLongitudes = Math.max.apply(null, getLatLong(points).longitudes);
    var minLatitudes = Math.min.apply(null, getLatLong(points).latitudes);
    var minLongitudes = Math.min.apply(null, getLatLong(points).longitudes);

    const CENTER = [
      minLatitudes + (maxLatitudes - minLatitudes) / 2,
      minLongitudes + (maxLongitudes - minLongitudes) / 2
    ];

    const options = { align: 'center' };
    const TRESH_ANGLE = 140;
    const INDEX = [];
    const UNUSED = [];
    for (var a = 0; a < points[0].length - 1; a++) {
      if (
        points[0][a][0] == minLatitudes || points[0][a][0] == maxLatitudes ||
        points[0][a][1] == minLongitudes || points[0][a][1] == maxLongitudes
      ) {
        INDEX.push(a);
      } else {
        UNUSED.push(a);
      }
    }

    const LINES = {};
    INDEX.forEach((i) => {
      const P = points[0][i - 1] ? points[0][i - 1] : points[0].slice(-1)[0];
      const BEARING1 = ms.geometry.bearingBetween(points[0][i], P);
      const BEARING2 = ms.geometry.bearingBetween(points[0][i], points[0][i + 1]);
      let ANGLE = Math.abs(BEARING1 - BEARING2);
      ANGLE = ANGLE >= 180 ? 360 - ANGLE : ANGLE;
      if (ANGLE <= TRESH_ANGLE) {
        annotations.push(ms.geometry.addAnnotation(points[0][i], annotationText, options));
        const P1 = INDEX.includes(i - 1) ? ms.geometry.pointBetween(P, points[0][i], 0.1) : P;
        const P2 = INDEX.includes(i + 1) ? ms.geometry.pointBetween(points[0][i], points[0][i + 1], 0.1) : points[0][i + 1];

        LINES[i] = [
          [
            P1,
            ms.geometry.pointBetween(P, points[0][i], 0.9)
          ],
          null,
          [
            ms.geometry.pointBetween(points[0][i], points[0][i + 1], 0.1),
            P2
          ]
        ];

      } else {
        const D1 = ms.geometry.distanceBetween(CENTER, P);
        const D2 = ms.geometry.distanceBetween(CENTER, points[0][i + 1]);
        let LINE;
        if (D1 > D2) {
          LINE = [points[0][i], points[0][i + 1]];
        } else {
          LINE = [P, points[0][i], ];
        }
        const angle = ms.geometry.bearingBetween(LINE[0], LINE[1]) % 180 - 90;
        annotations.push(ms.geometry.addAnnotation(
          ms.geometry.pointBetween(LINE[0], LINE[1], 0.5),
          annotationText, { align: 'center', angle }
        ));
        LINES[i] = [
          [
            LINE[0],
            ms.geometry.pointBetween(LINE[0], LINE[1], 0.44)
          ],
          null,
          [
            ms.geometry.pointBetween(LINE[0], LINE[1], 0.56),
            LINE[1]
          ]
        ];
      }
    });
    const GEOMETRY = [];
    const GEO = [];
    let FINAL = [];
    [...INDEX, ...UNUSED].sort().forEach((index) => {
      if (INDEX.includes(index)) {
        GEO.push(...LINES[index].flat());
      }
      if (UNUSED.includes(index)) {
        GEO.push(points[0][index]);
      }
    });
    GEO.forEach(geo => {
      if (geo !== null) {
        FINAL.push(geo);
      } else {
        GEOMETRY.push(FINAL);
        FINAL = [];
      }
    });
    FINAL.push(GEOMETRY[0][0]);
    GEOMETRY.push(FINAL);

    geometry.coordinates = GEOMETRY;
    shape = { geometry };
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