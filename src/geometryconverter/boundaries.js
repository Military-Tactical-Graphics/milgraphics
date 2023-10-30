import ms from '../../index';

export default function (feature) {
    const points = feature.geometry.coordinates;
    const geometry = { type: "MultiLineString", coordinates: [] };
    const ANNOTATIONS = [];
    const LINES = [];
    let SEGMENTS = [];
    let FINAL_LINES = [];
    for (let i = 0; i < points.length - 1; ++i) {
        LINES.push(
            [points[i], points[i + 1]]
        );
    }

    LINES.forEach((line) => {
        const ANGLE = ms.geometry.bearingBetween(line[0], line[1]);
        let TEXT = '';
        if (feature.properties?.uniqueDesignation) {
            TEXT += feature.properties.uniqueDesignation;
        }
        if (feature.properties?.echelon) {
            if (feature.properties?.uniqueDesignation) {
                TEXT += '\n'
            }
            TEXT += feature.properties.echelon
        }
        if (feature.properties?.uniqueDesignation1) {
            if (feature.properties?.echelon || feature.properties?.uniqueDesignation) {
                TEXT += '\n'
            }
            TEXT += feature.properties.uniqueDesignation1
        }
        const CENTER = ms.geometry.pointBetween(line[0], line[1], 0.5);
        const ANNOTATION = {
            geometry: { type: "Point", coordinates: CENTER },
            properties: { text: TEXT, align: 'center', angle: ANGLE + 90 }
        };

        ANNOTATIONS.push(ANNOTATION);
        if (
            feature.properties?.echelon ||
            feature.properties.uniqueDesignation ||
            feature.properties.uniqueDesignation1
        ) {
            SEGMENTS.push(
                [
                    line[0],
                    ms.geometry.pointBetween(line[0], line[1], 0.48)
                ]
            );
            SEGMENTS.push(
                [
                    ms.geometry.pointBetween(line[0], line[1], 0.52),
                    line[1]
                ]
            );
        } else {
            SEGMENTS.push(
                [
                    line[0],
                    CENTER
                ]
            );
            SEGMENTS.push(
                [
                    CENTER,
                    line[1]
                ]
            );
        }
    });

    if (feature.properties?.hostile) {
        SEGMENTS.forEach((segment) => {
            const ANGLE = ms.geometry.bearingBetween(segment[0], segment[1]);
            const ANNOTATION = {
                geometry: { type: "Point", coordinates: ms.geometry.pointBetween(segment[0], segment[1], 0.5) },
                properties: { text: feature.properties.hostile, align: 'center', angle: ANGLE + 90 }
            };
            ANNOTATIONS.push(ANNOTATION);
            FINAL_LINES.push(
                [
                    segment[0],
                    ms.geometry.pointBetween(segment[0], segment[1], 0.47)
                ]
            );
            FINAL_LINES.push(
                [
                    segment[1],
                    ms.geometry.pointBetween(segment[0], segment[1], 0.53)
                ]
            );
        });
    } else {
        FINAL_LINES = SEGMENTS;
    }


    geometry.coordinates = FINAL_LINES;

    return { geometry: geometry, annotations: ANNOTATIONS };
};
