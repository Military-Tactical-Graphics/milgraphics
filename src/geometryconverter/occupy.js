import ms from '../../index';

// Draws a circle withe a radius in meters
export default function(feature) {
    var p = feature.geometry.coordinates;
    var r = ms.geometry.distanceBetween(p[0], p[1]);
    var bearing = ms.geometry.bearingBetween(p[0], p[1]);
    var geometry = {
        type: "MultiLineString",
        coordinates: [
            []
        ]
    };

    var annotations = {
        geometry: { type: "Point" },
        properties: { text: "O" }
      };

    for (var d = 0; d <= 340; d += 5) {
        geometry.coordinates[0].push(
            ms.geometry.toDistanceBearing(p[0], r, d + bearing)
        );
        if (d == 340 / 2) {
            annotations.geometry.coordinates = ms.geometry.toDistanceBearing(p[0], r, d + bearing);
        }
    }

    var pEnd = ms.geometry.toDistanceBearing(p[0], r, 340 + bearing);
    var geom = [
        ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) + 45),
        pEnd,
        ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) - 45)
    ];
    geometry.coordinates.push(geom);

    pEnd = ms.geometry.toDistanceBearing(p[0], r, 340 + bearing);
    geom = [
        ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing + (90 + 15) + 45),
        pEnd,
        ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing + (90 + 15) - 45)
    ];
    geometry.coordinates.push(geom);

    return { geometry: geometry, annotations: [annotations] };
};