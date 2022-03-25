import ms from '../../index';

export default function(feature) {
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };
    var scale = ms.geometry.distanceBetween(points[0], points[1]);
    var length = ms.geometry.crossTrackDistance(points[0], points[1], points[2]);
    var bearing = ms.geometry.bearingBetween(points[0], points[1]);

    var geom = [
        points[0],
        ms.geometry.toDistanceBearing(points[0], length, bearing + 90),
        ms.geometry.toDistanceBearing(points[1], length, bearing + 90),
        points[1]
    ];
    geometry.coordinates.push(geom);

    // arrows
    [points[0], points[1]].forEach(arrowPoint => {
        geom = [
            ms.geometry.toDistanceBearing(arrowPoint, scale * 0.2, bearing + 90 - 30),
            arrowPoint,
            ms.geometry.toDistanceBearing(arrowPoint, scale * 0.2, bearing + 90 + 30),
        ];
        geometry.coordinates.push(geom);
    });

    var annotations = [{
        geometry: { type: "Point", coordinates: points[2] },
        properties: { text: "B" }
    }];

    return { geometry: geometry, annotations: annotations };
};