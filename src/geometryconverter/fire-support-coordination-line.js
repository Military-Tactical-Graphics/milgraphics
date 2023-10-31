import ms from '../../index';

export default function(feature) {
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    var annotations = [];
    var annotationTop = "FSCL";
    var annotationUnder = "";

    if (feature.properties.name)
        annotationTop = `${feature.properties.name} ${annotationTop}`;
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

    const TEXT = `PL ${feature.properties?.uniqueDesignation || ''}`
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points[0], 30, -90), TEXT, { align: 'right' }));
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points.slice(-1)[0], 30, 90), TEXT, { align: 'left' }));

    return { geometry: geometry, annotations: annotations };
};