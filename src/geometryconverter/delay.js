import ms from '../../index';

export default function(feature) {
    var directionFactor = -1;
    var points = feature.geometry.coordinates;
    var width = ms.geometry.distanceBetween(points[1], points[2]);
    var bearing = ms.geometry.bearingBetween(points[0], points[1]);

    var geometry = { type: "MultiLineString", coordinates: [ ]};

    geometry.coordinates.push([
        points[0],
        ms.geometry.pointBetween(points[0], points[1], 0.48)
    ]);
    geometry.coordinates.push([
        ms.geometry.pointBetween(points[0], points[1], 0.52),
        points[1]
    ]);
    var geometry1 = [points[1]];

    var midpoint = ms.geometry.pointBetween(points[1], points[2], 0.5);
    var curveBearing = ms.geometry.bearingBetween(points[1], points[2]);
    if (curveBearing < 0 && bearing < 0) directionFactor = 1;

    for (var i = 10; i < 180; i += 10) {
        geometry1.push(
            ms.geometry.toDistanceBearing(
                midpoint,
                width / 2,
                curveBearing + i * directionFactor + 180
            )
        );
    }
    geometry1.push(points[2]);

    var geometry2 = [
        ms.geometry.toDistanceBearing(points[0], width * 0.4, bearing + 45),
        points[0],
        ms.geometry.toDistanceBearing(points[0], width * 0.4, bearing - 45)
    ];

    geometry.coordinates = [...geometry.coordinates, geometry1, geometry2];
    var annotations = [{
        geometry: {
            type: "Point",
            coordinates: ms.geometry.pointBetween(
                points[0],
                points[1],
                0.5
            )
        },
        properties: {
            text: feature.properties.dtg ? feature.properties.dtg + "\nD" : "D",
            angle: bearing - 90,
            align: 'center'
        }
    }];

    return { geometry: geometry, annotations: annotations };
};