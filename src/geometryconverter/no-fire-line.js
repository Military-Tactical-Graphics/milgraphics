import ms from '../../index';

export default function(feature) {
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    var annotations = [];
    var annotationText = " NFL\n";

    if (feature.properties.name) {
        annotationText += `(PL ${feature.properties.name})`; 
    }

    geometry.coordinates = [points];
    const startBearing = ms.geometry.bearingBetween(points[1], points[0]);
    const lastTwo = points.slice(-2);
    const endBearing = ms.geometry.bearingBetween(lastTwo[0], lastTwo[1]);

    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(points[0], 50, startBearing),
        annotationText,
        { angle: startBearing - 90, align: 'right' }
    ));
    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(lastTwo[1], 50, endBearing),
        annotationText,
        { angle: endBearing - 90, align: 'left' }
    ));

    return { geometry: geometry, annotations: annotations };
};