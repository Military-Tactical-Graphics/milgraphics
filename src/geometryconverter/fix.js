var ms = require("milsymbol");

module.exports = function(feature) {
    var points = feature.geometry.coordinates;
    var length = ms.geometry.distanceBetween(points[0], points[1]);
    var bearing = ms.geometry.bearingBetween(points[0], points[1]);
    var width = length * 0.10;

    var geometry = { type: "MultiLineString", coordinates: [] };
    var geometry1 = [];
    var opposite = -90;

    geometry1.push(points[0], ms.geometry.pointBetween(points[0], points[1], 0.2));
    for (var i = 0.25; i < 0.8; i = i + 0.05) {
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

    var geometry2 = [
        ms.geometry.toDistanceBearing(points[0], width * 1.5, bearing + 45),
        points[0],
        ms.geometry.toDistanceBearing(points[0], width * 1.5, bearing - 45)
    ];

    var lastTwo = geometry1.slice(-2);

    var middlePoint = ms.geometry.pointBetween(
        lastTwo[0],
        lastTwo[1],
        0.5);
    
    var annotations = {
        geometry: { type: "Point", coordinates: middlePoint },
        properties: { text: "F" }
    };

    geometry.coordinates = [geometry1, geometry2];
    return { geometry: geometry, annotations: [annotations] };
};