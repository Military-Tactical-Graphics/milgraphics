import ms from '../../index';

export default function(feature) {
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    var annotations = [];
    var annotationText = "NFL\n";

    if (feature.properties.name) {
        annotationText += `(PL ${feature.properties.name})`; 
    }

    geometry.coordinates = [points];
    annotations.push(ms.geometry.addAnnotation(points[0], annotationText));
    annotations.push(ms.geometry.addAnnotation(points.slice(-1)[0], annotationText));

    return { geometry: geometry, annotations: annotations };
};