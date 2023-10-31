import ms from '../../index';

export function createCorridor(feature, text) {
    var annotations = [];
    var annotationText = '';
    var points = feature.geometry.coordinates;
    var width = feature.properties.distance;
    var centerPoint = ms.geometry.pointBetween(points[0], points[1], 0.5);
    var above = [];
    var under = [];

    var geometry = {
        type: "MultiLineString",
        coordinates: []
    };

    for (let a = 1; a < points.length; a++) {
        var midpoint = ms.geometry.pointBetween(points[a - 1], points[a], 0.5);
        const angle = -90 + ms.geometry.bearingBetween(points[a - 1], points[a]);
        annotations.push(ms.geometry.addAnnotation(midpoint, `${text} ${feature.properties.uniqueDesignation || ''}`, { angle }));
    }

    const labels = {
        'NAME': feature.properties.uniqueDesignation,
        'WIDTH': `${feature.properties.distance} m`,
        'MIN ALT': feature.properties.altitudeDepth,
        'MAX ALT': feature.properties.altitudeDepth1,
        'DTG START': feature.properties.dtg,
        'DTG END': feature.properties.dtg1
    };

    Object.keys(labels).forEach((label) => {
        if (labels[label]) {
            const TXT = `\n${label}:          `.slice(0, 12);
            annotationText += `${TXT} ${labels[label]}`;
        }
    })


    if (annotationText != '') {
        annotations.push(ms.geometry.addAnnotation(ms.geometry.toDistanceBearing(centerPoint, width * 1.5, 0), annotationText));
    }

    var direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
    above.push(
        ms.geometry.toDistanceBearing(points[0], width / 2, direction - 90)
    );
    for (var j = 1; j < points.length - 1; j++) {
        var direction1 =
            (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
        var direction2 =
            (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
        var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
        //push above points to the geometry
        above.push(
            ms.geometry.toDistanceBearing(
                points[j],
                width / 2 * factor,
                (direction1 + direction2) / 2
            )
        );
    }

    direction =
        (ms.geometry.bearingBetween(
                points[points.length - 1],
                points[points.length - 2]
            ) +
            180) %
        360;
    //point above push to geometry
    above.push(
        ms.geometry.toDistanceBearing(
            points[points.length - 1],
            width / 2,
            direction - 90
        )
    );
    //points under push to geometry
    under.push(
        ms.geometry.toDistanceBearing(
            points[points.length - 1],
            width / 2,
            direction + 90
        )
    );

    for (j = points.length - 2; j > 0; j--) {
        direction1 =
            (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
        direction2 =
            (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
        factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
        //point under
        under.push(
            ms.geometry.toDistanceBearing(
                points[j], -(width / 2) * factor,
                (direction1 + direction2) / 2
            )
        );
    }

    direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
    under.push(
        ms.geometry.toDistanceBearing(points[0], width / 2, direction + 90)
    ); //Close line
    geometry.coordinates.push(above, under);

    return {
        geometry: geometry,
        annotations: annotations
    };
};