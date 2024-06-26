import ms from '../../index';
import { getLatLong } from '../geometry/functions';

export default function (feature) {
    var annotations = [];
    var points = feature.geometry.coordinates
    var annotationText = feature.properties.uniqueDesignation;
    var shape;
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
        if (points[0][a][1] == maxLongitudes) {
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
                LINE = [P, points[0][i],];
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

    shape = { geometry: { ...geometry, coordinates: GEOMETRY } };
    return {
        geometry: shape.geometry,
        annotations: annotations
    };
}
