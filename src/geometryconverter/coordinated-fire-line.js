import ms from '../../index';
import convertToDashed from "../geometry/converttodashed";

export default function (feature) {

    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    var geometry1 = [];

    for (var i = 0; i < points.length; i++) {
        geometry1.push(points[i]);
    }

    var annotations = [
        {
            geometry: { type: "Point" },
            properties: { text: "CFL", align: 'center' }
        }
    ];

    // if odd number of vertices, put on central vertex
    if (points.length % 2 !== 0) {
        annotations[0].geometry.coordinates = ms.geometry.toDistanceBearing(
            points[parseInt(points.length / 2)], 50, 0);
        if (feature.properties.dtg || feature.properties.dtg1) {
            const text = `${feature.properties.dtg}${feature.properties.dtg1 ? '-' : ''}${feature.properties.dtg1}`;
            annotations.push({
                geometry: {
                    type: "Point", coordinates: ms.geometry.toDistanceBearing(
                        points[parseInt(points.length / 2)], 50, 180)
                },
                properties: { text, align: 'center' }
            });
        }
    } else {
        const POINT = ms.geometry.pointBetween(
            points[parseInt(points.length / 2) - 1],
            points[parseInt(points.length / 2)],
            0.5
        );
        const ANGLE = ms.geometry.bearingBetween(
            points[parseInt(points.length / 2) - 1],
            points[parseInt(points.length / 2)]
        );
        annotations[0].properties.angle = ANGLE - 90;

        annotations[0].geometry.coordinates = ms.geometry.toDistanceBearing(
            POINT, 50, ANGLE - 90);

        if (feature.properties.dtg || feature.properties.dtg1) {
            const text = `${feature.properties.dtg}${feature.properties.dtg1 ? '-' : ''}${feature.properties.dtg1}`;
            annotations.push({
                geometry: {
                    type: "Point", coordinates: ms.geometry.toDistanceBearing(
                        POINT, 50, ANGLE + 90)
                },
                properties: { text, align: 'center', angle: ANGLE - 90 }
            });
        }
    }
    if (feature.properties.uniqueDesignation) {
        annotations[0].properties.text += ` ${feature.properties.uniqueDesignation}`;
    }

    geometry.coordinates = convertToDashed(geometry1, 1 / 50);

    const text = `PL ${feature.properties.uniqueDesignation1 || ''}`;
    const angle1 = ms.geometry.bearingBetween(geometry.coordinates[0][0], geometry.coordinates[0][1]);

    const LAST = geometry.coordinates.slice(-1);
    const angle2 = ms.geometry.bearingBetween(LAST[0][0], LAST[0][1]);

    annotations.push(ms.geometry.addAnnotation(
        geometry.coordinates[0][0], `${text} `, { align: "right", angle: angle1 - 90 }
    ));

    annotations.push(ms.geometry.addAnnotation(
        LAST[0][1], ` ${text}`, { align: "left", angle: angle2 - 90 }
    ));

    return { geometry: geometry, annotations: annotations, props: { dashes: true } };
};