import ms from '../../index';

export default function (feature) {

  const points = feature.geometry.coordinates;
    const geometry = { type: "MultiLineString", coordinates: [] };
    const ANNOTATIONS = [];
    const LINES = [];
    let SEGMENTS = [];

    for (let i = 0; i < points.length - 1; ++i) {
        LINES.push(
            [points[i], points[i + 1]]
        );
    }

    let DTG = '';
    if (feature.properties.dtg) DTG += feature.properties.dtg;
    if (feature.properties.dtg1) DTG += `-\n${feature.properties.dtg1}`;

    LINES.forEach((line) => {
        const ANGLE = ms.geometry.bearingBetween(line[0], line[1]);    
        const CENTER = ms.geometry.pointBetween(line[0], line[1], 0.5);
        const ANNOTATION = {
            geometry: { type: "Point", coordinates: CENTER },
            properties: { text: 'MFP', align: 'center', angle: ANGLE % 180 - 90 }
        };

        ANNOTATIONS.push(ANNOTATION);

        const LINE = [line[0], ms.geometry.pointBetween(line[0], line[1], 0.47)];
        const P1 = ms.geometry.pointBetween(LINE[0], LINE[1], 0.5);
        const P2 = ms.geometry.toDistanceBearing(P1, 100, 180);

        ANNOTATIONS.push(ms.geometry.addAnnotation(P2, DTG, { align: 'center', angle: ANGLE % 180 - 90  }));

        SEGMENTS.push(LINE);
        SEGMENTS.push([ms.geometry.pointBetween(line[0], line[1], 0.53), line[1]]);
    });
    geometry.coordinates = SEGMENTS;

    return { geometry: geometry, annotations: ANNOTATIONS };
};