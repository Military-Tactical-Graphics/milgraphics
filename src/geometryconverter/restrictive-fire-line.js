import ms from '../../index';

export default function(feature) {
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    var annotations = [];
    var annotationTop = "RFL";
    var annotationUnder = "";

    if (feature.properties.uniqueDesignation)
        annotationTop = `${annotationTop} ${feature.properties.uniqueDesignation}`;
    if (feature.properties.dtg)
        annotationUnder += feature.properties.dtg;
    if (feature.properties.dtg1)
        annotationUnder += `-${feature.properties.dtg1}`;

    geometry.coordinates = [points];
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points[0], 30, 45), annotationTop, { align: 'left' }));
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points.slice(-1)[0], 30, -45), annotationTop, { align: 'right' }));

    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points[0], -30, -45), annotationUnder, { align: 'left' }));
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points.slice(-1)[0], -30, 45), annotationUnder, { align: 'right' }));

    const TEXT = `PL ${feature.properties?.uniqueDesignation1 || ''}`
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points[0], 30, -90), TEXT, { align: 'right' }));
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points.slice(-1)[0], 30, 90), TEXT, { align: 'left' }));

    return { geometry: geometry, annotations: annotations };
};