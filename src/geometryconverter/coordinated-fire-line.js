var ms = require("milsymbol");
const convertToDashed = require("../geometry/converttodashed");

module.exports = function(feature) {

    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };
    var geometry1 = [];
    var annotationText = "CFL";

    for (var i = 0; i < points.length; i++) {
        geometry1.push(points[i]);
    }

    var annotations = [
        {
            geometry: { type: "Point" },
            properties: { text: annotationText }
        }
    ];

    // if odd number of vertices, put on central vertex
    if (points.length % 2 !== 0) {
        annotations[0].geometry.coordinates = points[parseInt(points.length / 2)];
    } else {
        annotations[0].geometry.coordinates = ms.geometry.pointBetween(
            points[parseInt(points.length / 2) - 1],
            points[parseInt(points.length / 2)],
            0.5
        );
    }
    if (feature.properties.name) {
        annotations[0].properties.text += " " + feature.properties.name;
    }
    
    geometry.coordinates = convertToDashed(geometry1, 1 / 50);

    const text = `PL ${feature.properties.uniqueDesignation || ''}`;
    annotations.push(ms.geometry.addAnnotation(geometry.coordinates[0][0], text));
    annotations.push(ms.geometry.addAnnotation(geometry.coordinates.slice(-1)[0][1], text));

    return { geometry: geometry, annotations: annotations, props: { dashes: true } };
};