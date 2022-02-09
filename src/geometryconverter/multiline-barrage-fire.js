var ms = require("milsymbol");
const toDistanceBearing = require("../geometry/todistancebearing");

module.exports = function(feature) {
    var annotations = [];
    var geometry = {
        type: "MultiLineString",
        coordinates: []
    };
    var points = feature.geometry.coordinates;
    var bearing = ms.geometry.bearingBetween(points[0], points[1]);;
    var scale = 500;
    var centerPoint = ms.geometry.pointBetween(points[0], points.slice(-1)[0], 0.5);
    var annotTopPos = ms.geometry.toDistanceBearing(centerPoint, scale * 0.05, bearing - 90); //annotation above the line
    var distance = 750; //distance between lines
    var geom = [];
    var geomBot = []; //geometry for bottom line

    for (let a = 1; a < points.length; a++) {

        geom = [
            ms.geometry.toDistanceBearing(points[a - 1], distance, bearing - 90),
            ms.geometry.toDistanceBearing(points[a], distance, bearing - 90)
        ];
        geomBot = [
            ms.geometry.toDistanceBearing(points[a - 1], distance, bearing + 90),
            ms.geometry.toDistanceBearing(points[a], distance, bearing + 90)
        ];
        geometry.coordinates.push(geom, geomBot);
    }

    geom = [
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], scale, bearing + 90), distance, bearing - 90),
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], scale, bearing - 90), distance, bearing - 90)

    ];
    geomBot = [
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], scale, bearing + 90), distance, bearing + 90),
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points[0], scale, bearing - 90), distance, bearing + 90)

    ];
    geometry.coordinates.push(geom, geomBot);

    geom = [
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], scale, bearing + 90), distance, bearing - 90),
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], scale, bearing - 90), distance, bearing - 90)
    ];
    geomBot = [
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], scale, bearing + 90), distance, bearing + 90),
        ms.geometry.toDistanceBearing(ms.geometry.toDistanceBearing(points.slice(-1)[0], scale, bearing - 90), distance, bearing + 90)
    ];
    geometry.coordinates.push(geom, geomBot);

    if (feature.properties.administrator) {
        annotations.push(ms.geometry.addAnotation(annotTopPos, feature.properties.administrator));
    }



    return {
        geometry: geometry,
        annotations: annotations
    };

};