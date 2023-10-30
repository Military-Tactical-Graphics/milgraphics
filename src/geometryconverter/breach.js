import ms from '../../index';

export default function(feature) {
    const points = feature.geometry.coordinates;
    const geometry = { type: "MultiLineString", coordinates: [] };
    const scale = ms.geometry.distanceBetween(points[0], points[1]);
    const length = ms.geometry.crossTrackDistance(points[0], points[1], points[2]);
    const bearing = ms.geometry.bearingBetween(points[0], points[1]);

    const P1 = ms.geometry.toDistanceBearing(points[0], length, bearing + 90);
    const P2 = ms.geometry.toDistanceBearing(points[1], length, bearing + 90);

    geometry.coordinates.push([
        points[0],
        P1,
        ms.geometry.pointBetween(P1, P2, 0.48)
    ]);
    geometry.coordinates.push([
        ms.geometry.pointBetween(P1, P2, 0.52),
        P2,
        points[1]
    ]);

    geometry.coordinates.push([
        ms.geometry.toDistanceBearing(points[0], scale * 0.05, bearing - 45),
        ms.geometry.toDistanceBearing(points[0], scale * 0.05, bearing - 45 + 180)
    ]);

    geometry.coordinates.push([
        ms.geometry.toDistanceBearing(points[1], scale * 0.05, bearing + 45),
        ms.geometry.toDistanceBearing(points[1], scale * 0.05, bearing + 45 + 180)
    ]);
    
    const annotations = [{
        geometry: { type: "Point", coordinates: ms.geometry.pointBetween(P1, P2, 0.5) },
        properties: { text: "B", angle: bearing - 180, align: 'center' }
    }];

    return { geometry: geometry, annotations: annotations };
};