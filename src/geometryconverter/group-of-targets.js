import ms from '../../index';

export default function(feature) {
    var annotations = [];
    var points = feature.geometry.coordinates;
    var annotationText = feature.properties.name;

    var polygon = ms.geometry.circleCorridorPolygon(feature);
    var maxLongitudes = Math.max.apply(null, getLatLong(points).longitudes);

    for (var a = 0; a < points[0].length; a++) {
        if (points[0][a][1] == maxLongitudes) {
            const P = ms.geometry.toDistanceBearing(points[0][a], 80, 0);
            annotations.push(ms.geometry.addAnnotation(P, annotationText, { align: 'center' }));
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