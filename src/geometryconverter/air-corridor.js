var ms = require("milsymbol");
const toDistanceBearing = require("../geometry/todistancebearing");

module.exports = function(feature) {
    var annotations = [];
    var points = feature.geometry.coordinates;
    var width = feature.properties.distance;
    var above = [];
    var under = [];
    
    var geometry = {
        type: "MultiLineString",
        coordinates: [
            []
        ]
    };
    var direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
    above.push(
        ms.geometry.toDistanceBearing(points[0], width / 2, direction - 90)
    );
    for (var j = 1; j < points.length - 1; j++) {
        var direction1 =
            (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
        var direction2 =
            (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
        var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
        //push above points to the geometry
        above.push(
            ms.geometry.toDistanceBearing(
                points[j],
                width / 2 * factor,
                (direction1 + direction2) / 2
            )
        );
    }

    direction =
        (ms.geometry.bearingBetween(
                points[points.length - 1],
                points[points.length - 2]
            ) +
            180) %
        360;
        //point above push to geometry
    above.push(
        ms.geometry.toDistanceBearing(
            points[points.length - 1],
            width / 2,
            direction - 90
        )
    );
    //points under push to geometry
    under.push(
        ms.geometry.toDistanceBearing(
            points[points.length - 1],
            width / 2,
            direction + 90
        )
    );

    for (j = points.length - 2; j > 0; j--) {
        direction1 =
            (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
        direction2 =
            (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
        factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
        //point under
        under.push(
            ms.geometry.toDistanceBearing(
                points[j], -(width / 2) * factor,
                (direction1 + direction2) /2
            )
        );
    }
   
    direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
    under.push(
        ms.geometry.toDistanceBearing(points[0], width / 2, direction + 90)
    ); //Close line
    geometry.coordinates.push(above);
    geometry.coordinates.push(under);
    return {
        geometry: geometry,
        annotations: annotations
    };

};