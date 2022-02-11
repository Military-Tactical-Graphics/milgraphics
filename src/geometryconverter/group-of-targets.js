var ms = require("milsymbol");

module.exports = function(feature) {
    var annotations = [];
    var points = feature.geometry.coordinates;
    var annotationText = feature.properties.name;

    var polygon = ms.geometry.circleCorridorPolygon(feature);
    if (polygon.annotation.hasOwnProperty("geometry")) {
        annotations.geometry = polygon.annotation.geometry;
    }
    console.log(points);

    var maxLongitudes = Math.max.apply(null, getLatLong(points).longitudes);


    for (var a = 0; a < points[0].length; a++) {
        if (points[0][a][1] == maxLongitudes) {
            annotations.push(ms.geometry.addAnotation(points[0][a], "FORD"));
        }

    }

    return {
        geometry: polygon.geometry,
        annotations: annotations
    };

}

function getLatLong(array) {
    var latitudes = [];
    var longitudes = [];

    for (var i = 0; i < array[0].length; i++) {
        latitudes.push(array[0][i][0]);
        longitudes.push(array[0][i][1]);
    }

    return { latitudes, longitudes };
};