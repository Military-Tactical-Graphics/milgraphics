import ms from '../../index';

export default function (feature) {
    let annotations = [],
        points = feature.geometry.coordinates,
        center = ms.geometry.pointBetween(points[0], points[1], 0.5),
        geometry = { type: "MultiLineString", coordinates: [] };

    // Ensure points are counter-clockwise, so the semi circle is drawn on the correct side
    if (ms.geometry.isClockwise(...points))
        points = [points[1], points[0], points[2]];

    // Draw a semicircle with openings points[0] and points[1], oriented away from points[2], with "spokes" facing inward
    let semiCircleLeft = [],
        semiCircleRight = [],
        spokes = [],
        radius = ms.geometry.distanceBetween(points[0], points[1]) / 2,
        intialBearing = ms.geometry.bearingBetween(center, points[0]);
    for (var direction = intialBearing; direction <= intialBearing + 85; direction += 5) {
        let vert1 = ms.geometry.toDistanceBearing(center, radius, direction);
        semiCircleLeft.push(vert1);
        let vert2 = ms.geometry.toDistanceBearing(center, radius, 2 * intialBearing - 180 - direction);
        semiCircleRight.push(vert2);
    }

    for (var direction = intialBearing; direction <= intialBearing + 80; direction += 18) {
        const vert1 = ms.geometry.toDistanceBearing(center, radius, direction);
        spokes.push([vert1,
            ms.geometry.pointBetween(vert1, center, 0.33)]);
        const vert2 = ms.geometry.toDistanceBearing(center, radius, 2 * intialBearing - 180 - direction);
        spokes.push([vert2,
            ms.geometry.pointBetween(vert2, center, 0.33)]);
    }

    const shortSpoke = [
        ms.geometry.toDistanceBearing(center, radius, intialBearing + 90),
        ms.geometry.pointBetween(ms.geometry.toDistanceBearing(center, radius, intialBearing + 90), center, 0.33)
    ];
    spokes.push([
        shortSpoke[1],
        ms.geometry.pointBetween(shortSpoke[0], shortSpoke[1], 0.15)
    ]);

    geometry.coordinates.push(semiCircleLeft, semiCircleRight, ...spokes);

    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.toDistanceBearing(center, radius, intialBearing + 90), "C", { align: 'center', angle: (intialBearing % 180) }));

    // Draw the arrow head
    let scale = ms.geometry.distanceBetween(points[2], center) * 0.15,
        bearing = ms.geometry.bearingBetween(points[0], points[1]),
        arrowHead = [
            ms.geometry.toDistanceBearing(center, scale, bearing + 60),
            center,
            ms.geometry.toDistanceBearing(center, scale, bearing + 60 + 60)
        ];
    geometry.coordinates.push(arrowHead);

    // Draw the arrow body
    geometry.coordinates.push([
        points[2],
        ms.geometry.pointBetween(points[2], center, 0.45)
    ]);
    geometry.coordinates.push([
        ms.geometry.pointBetween(points[2], center, 0.55),
        center
    ]);

    const angle = ms.geometry.bearingBetween(center, points[2]);

    annotations.push(ms.geometry.addAnnotation(
        ms.geometry.pointBetween(points[2], center, 0.5), "ENY", { align: 'center', angle : (angle % 180) - 90 }
    ));

    return { geometry: geometry, annotations: annotations };
};