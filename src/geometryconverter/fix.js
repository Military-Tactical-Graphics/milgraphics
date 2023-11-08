import ms from '../../index';

export default function(feature) {
    const points = feature.geometry.coordinates;
    const length = ms.geometry.distanceBetween(points[0], points[1]);
    const bearing = ms.geometry.bearingBetween(points[0], points[1]);
    const width = length * 0.10;

    const geometry = { type: "MultiLineString", coordinates: [] };
    let geometry1 = [points[0], ms.geometry.pointBetween(points[0], points[1], 0.2)];
    let opposite = -90;

    for (let i = 0.25; i < 0.8; i = i + 0.05) {
        opposite = -opposite
        geometry1.push(
            ms.geometry.toDistanceBearing(
                ms.geometry.pointBetween(points[0], points[1], i),
                width,
                bearing + opposite
            )
        );
    }
    geometry1.push(ms.geometry.pointBetween(points[0], points[1], 0.8), points[1]);

    const geometry3 = [
        ms.geometry.toDistanceBearing(points[0], width * 1.5, bearing + 45),
        points[0],
        ms.geometry.toDistanceBearing(points[0], width * 1.5, bearing - 45)
    ];

    const lastTwo = geometry1.slice(-2);

    geometry1 = [
        ...geometry1.slice(0, -2),
        lastTwo[0],
        ms.geometry.pointBetween(
            lastTwo[0],
            lastTwo[1],
            0.46)
    ];

    const geometry2 = [
        ms.geometry.pointBetween(
            lastTwo[0],
            lastTwo[1],
            0.54),
        lastTwo[1]
        ];

    const middlePoint = ms.geometry.pointBetween(
        lastTwo[0],
        lastTwo[1],
        0.5);
    
    const annotations = {
        geometry: { type: "Point", coordinates: middlePoint },
        properties: { text: "F", align: 'center', angle: (bearing % 180) - 90 }
    };
    geometry.coordinates = [geometry1, geometry2, geometry3];
    return { geometry: geometry, annotations: [annotations] };
};