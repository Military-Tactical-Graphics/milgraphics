import ms from '../../index';

export default function(feature) {
    var points = feature.geometry.coordinates;
    var annotations = [];
    var geometry = { type: "MultiLineString", coordinates: [points] };
    
    const text = `PL ${feature.properties.name || ''}`;
    const angle1 = ms.geometry.bearingBetween(points[0], points[1]);

    const LAST = points.slice(-2);
    const angle2 = ms.geometry.bearingBetween(LAST[0], LAST[1]);

    annotations.push(ms.geometry.addAnnotation(
        points[0], `${text} `, { align: "right", angle: angle1 - 90 }
    ));

    annotations.push(ms.geometry.addAnnotation(
        LAST[1], ` ${text}`, { align: "left", angle: angle2 - 90 }
    ));

    return { geometry, annotations };
}
