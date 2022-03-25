import ms from '../../index';

export default function (feature) {

    var points = feature.geometry.coordinates;
    var distance = feature.properties.distance; //distance in meters
    var centerPoint;
    var annotations = {
        geometry: { type: "Point", coordinates: centerPoint },
        properties: { text: `NFA\n` }
    };

    feature.properties.fill = 'dashes';

    if (feature.properties.name) {
        annotations.properties.text += feature.properties.name
    }
    if (feature.properties.dtg) {
        annotations.properties.text += `\n${feature.properties.dtg}`
    }
    if (feature.properties.dtg1) {
        annotations.properties.text += ` - ${feature.properties.dtg1}`
    }

    if (feature.geometry.type == "Point") {
        centerPoint = points;
    }
    if (feature.geometry.type == "LineString") {
        centerPoint = ms.geometry.pointBetween(points[0], points[1], 0.5);
        distance = distance / 2;
    }
    if (feature.geometry.type == "Polygon") {
        //Variables for northernmost, southernmost coordinates for annotations in polygon
        var northernmost;
        var southernmost;
        var maxLongitudes = Math.max.apply(null, getLatLong(points).longitudes);
        var minLongitudes = Math.min.apply(null, getLatLong(points).longitudes);

        for (var a = 0; a < points[0].length; a++) {
            if (points[0][a][1] == minLongitudes) {
                northernmost = points[0][a];
            } else if (points[0][a][1] == maxLongitudes) {
                southernmost = points[0][a];
            }
        }
        centerPoint = ms.geometry.pointBetween(southernmost, northernmost, 0.5);
    }

    var shape = ms.geometry.circleCorridorPolygon(feature);

    return {
        geometry: shape.geometry,
        annotations: [annotations]
    };
}

function getLatLong(array) {
    var latitudes = [];
    var longitudes = [];

    for (var i = 0; i < array[0].length; i++) {
        latitudes.push(array[0][i][0]);
        longitudes.push(array[0][i][1]);
    }

    return {
        latitudes,
        longitudes
    };
};