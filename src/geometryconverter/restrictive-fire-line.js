import ms from '../../index';

export default function(feature) {


    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    var annotations = [];
    var annotationTop = "RFL";
    var annotationUnder = "";


    if (feature.properties.name)
        annotationTop +=
        " " + feature.properties.name;
    if (feature.properties.dtg)
        annotationUnder += feature.properties.dtg;
    if (feature.properties.dtg1)
        annotationUnder += " - " + feature.properties.dtg1;

    geometry.coordinates = [points];
    annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(points[0], 30, 45), annotationTop));
    annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(points.slice(-1)[0], 30, -45), annotationTop));

    annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(points[0], -30, -45), annotationUnder));
    annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(points.slice(-1)[0], -30, 45), annotationUnder));

    annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(points[0], 40, -90), `PL ${feature.properties.uniqueDesignation || ''}`));
    annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(points.slice(-1)[0], 40, 90), `PL ${feature.properties.uniqueDesignation || ''}`));

    return { geometry: geometry, annotations: annotations };
};