import ms from '../../index';
import { getLatLong } from './functions';

export function flat(arr) {
  return [].concat.apply([], arr);
};

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
    const ANGLE = ms.geometry.bearingBetween(points[0], points[1]) % 180 - 90;
    
    for (let i = 0; i < rectangle.length - 1; ++i) {
      const LINE = [rectangle[i], rectangle[i + 1]];

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
          annotationText, { align: 'center', angle: ANGLE}
        ));
    }
    shape = { geometry };
  }

  if (feature.geometry.type == "Polygon") {
  

    const geometry = {
      type: 'MultiLineString',
      coordinates: []
    };
    points = points[0];
    const last_point = points.slice(-1)[0];
    const first_point = points.slice(0, 1)[0];
    if (last_point[0] === first_point[0] && last_point[1] === first_point[1]) {
      points = points.slice(0, -1)
    }
    const { latitudes, longitudes } = getLatLong([points]);
    var maxLatitudes = Math.max.apply(null, latitudes);
    var maxLongitudes = Math.max.apply(null, longitudes);
    var minLatitudes = Math.min.apply(null, latitudes);
    var minLongitudes = Math.min.apply(null, longitudes);

    const CENTER = [
      minLatitudes + (maxLatitudes - minLatitudes) / 2,
      minLongitudes + (maxLongitudes - minLongitudes) / 2
    ];

    const options = { align: 'center' };
    const TRESH_ANGLE = 140;
    const INDEX = [];
    const UNUSED = [];
    for (var a = 0; a < points.length; a++) {
      if (
        points[a][0] == minLatitudes || points[a][0] == maxLatitudes ||
        points[a][1] == minLongitudes || points[a][1] == maxLongitudes
      ) {
        INDEX.push(a);
      } else {
        UNUSED.push(a);
      }
    }

    const LINES = {};
    INDEX.forEach((i) => {
      const NEXT = points[i + 1] || points[0];
      const P = points[i - 1] ? points[i - 1] : points.slice(-1)[0];
      const BEARING1 = ms.geometry.bearingBetween(points[i], P);
      const BEARING2 = ms.geometry.bearingBetween(points[i], NEXT);
      let ANGLE = Math.abs(BEARING1 - BEARING2);
      ANGLE = ANGLE >= 180 ? 360 - ANGLE : ANGLE;
      if (ANGLE <= TRESH_ANGLE) {
        annotations.push(ms.geometry.addAnnotation(points[i], annotationText, options));
        const P1 = INDEX.includes(i - 1) ? ms.geometry.pointBetween(P, points[i], 0.1) : P;
        const P2 = INDEX.includes(i + 1) ? ms.geometry.pointBetween(points[i], NEXT, 0.1) : NEXT;

        LINES[i] = [
          [
            P1,
            ms.geometry.pointBetween(P, points[i], 0.9)
          ],
          null,
          [
            ms.geometry.pointBetween(points[i], NEXT, 0.1),
            P2
          ]
        ];

      } else {
        const D1 = ms.geometry.distanceBetween(CENTER, P);
        const D2 = ms.geometry.distanceBetween(CENTER, NEXT);
        let LINE;
        if (D1 > D2) {
          LINE = [points[i], NEXT];
        } else {
          LINE = [P, points[i]];
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
      if (INDEX.includes(index) && LINES[index]) {
        GEO.push(...flat(LINES[index]));
      }
      if (UNUSED.includes(index) && points[index]) {
        GEO.push(points[index]);
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

    shape = { geometry: { ...geometry, coordinates: GEOMETRY } };
  }

  return {
    geometry: shape.geometry,
    annotations: annotations
  };
}
