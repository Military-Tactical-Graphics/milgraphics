import ms from '../../index';
import { textRotation } from '../geometry/functions';

function artilleryFiringPosition(feature) {
    var annotations = [];
    var geometry = {
        type: "MultiLineString",
        coordinates: []
    };
    var points = feature.geometry.coordinates;
    var bearing = ms.geometry.bearingBetween(points[0], points[1]);
    var scale = ms.geometry.distanceBetween(points[0], points[1]);

    var geom = [
        ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing + 90),
        points[0],
        points[1],
        ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing + 90),
    ];
    geometry.coordinates.push(geom);

    if (feature.properties.firingPosition) {
        var centerPoint = ms.geometry.pointBetween(geom[2], geom[3], 0.5);
        let angle = ms.geometry.bearingBetween(geom[2], geom[3]);
        var annotationPoint = ms.geometry.toDistanceBearing(centerPoint, -scale * 0.02, angle + 90);
        annotations.push(ms.geometry.addAnnotation(
            annotationPoint, feature.properties.firingPosition,
            { angle: textRotation(angle) }));
    }

    return {
        geometry: geometry,
        annotations: annotations
    };
};

export default artilleryFiringPosition;