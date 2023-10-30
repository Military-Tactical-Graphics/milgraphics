import ms from '../../index';

export default function(feature) {
    const points = feature.geometry.coordinates;
    const geometry = { type: "MultiLineString", coordinates: [] };
    const scale = ms.geometry.distanceBetween(points[0], points[1]);

    geometry.coordinates.push([points[0], points[1]]);

    let pMid = ms.geometry.pointBetween(points[0], points[1], 0.5);
    const length = ms.geometry.distanceBetween(pMid, points[2]);
    const bearing = ms.geometry.bearingBetween(points[0], points[1]);

    const mPoint = ms.geometry.toDistanceBearing(pMid, length, bearing + 90);

    geometry.coordinates.push([
        pMid, ms.geometry.pointBetween(pMid, mPoint, 0.48)
    ]);
    geometry.coordinates.push([
        ms.geometry.pointBetween(pMid, mPoint, 0.52), mPoint
    ]);

    const angle = ms.geometry.bearingBetween(pMid, mPoint);

    const annotations = [{
        geometry: {
            type: "Point",
            coordinates: ms.geometry.pointBetween(
                pMid,
                mPoint,
                0.5
            )
        },
        properties: { text: "C", align: 'center', angle: angle - 90 }
    }];

    geometry.coordinates.push([ // arrow
        ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60),
        pMid,
        ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
    ]);

    pMid = ms.geometry.pointBetween(points[0], points[1], 0.2);
    geometry.coordinates.push([pMid, ms.geometry.toDistanceBearing(pMid, length, bearing + 90)]);

    geometry.coordinates.push([ // arrow
        ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60),
        pMid,
        ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
    ]);


    pMid = ms.geometry.pointBetween(points[0], points[1], 0.8);
    geometry.coordinates.push([pMid, ms.geometry.toDistanceBearing(pMid, length, bearing + 90)]);


    geometry.coordinates.push([ // arrow
        ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60),
        pMid,
        ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
    ]);


    return { geometry: geometry, annotations: annotations };
};