import ms from '../../index';

function lineOfContact(feature, relative = false) {
    //var direction, width;
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString", coordinates: [] };

    // Geometry 1 - bearing line of n points
    var bearingGeos = [];
    var bearingWidth = (feature.properties.bearingWidth) ? feature.properties.bearingWidth : 400;
    var bearingSpacing = (feature.properties.bearingSpacing) ? feature.properties.bearingSpacing : 5;
    var spaceBetween = (feature.properties.spaceBetween) ? feature.properties.spaceBetween : 10;

    // loop to repeat for every segment of the polygon that was input
    for (var i = 1; i < points.length; i += 1) {
        if (relative === false) {
            // visualize that many bearings with absolute width
            bearingGeos = lineOfContactAbsolute(bearingGeos, points[i - 1], points[i], bearingWidth, bearingSpacing, spaceBetween)
        } else {
            // Alternative - old implementation based on relative sizes of bearings
            // Making each segment into a bearing line with 2^5 = 32 bearings
            bearingGeos = lineOfContactRelative(bearingGeos, points[i - 1], points[i], 5)
        }
    }

    // visualise individual bearings
    for (var i = 0; i < bearingGeos.length; i += 1) {
        geometry.coordinates.push(bearingGeos[i]);
    }

    var annotations = [];
    const initialBearing = ms.geometry.bearingBetween(points[0], points[1]);
    const lastPoints = points.slice(-2);
    const endBearing = ms.geometry.bearingBetween(lastPoints[0], lastPoints[1])
    const P1 = ms.geometry.toDistanceBearing(points[0], bearingWidth / 2, initialBearing - 275);
    const P2 = ms.geometry.toDistanceBearing(points.slice(-1)[0], bearingWidth / 2, endBearing + 90)
    let TEXT = '';
    if (feature.properties?.hostile) {
        TEXT += feature.properties.hostile
    }    
    annotations.push(
        ms.geometry.addAnnotation(P1, TEXT, { align: 'center', angle: initialBearing - 90 }
        )
    );
    annotations.push(
        ms.geometry.addAnnotation(P2, TEXT, { align: 'center', angle: endBearing - 90 }
        )
    );


    return { geometry, annotations };
}

// old implementation, creates a bearing line with 2^(degree-1) bearings, each segment has bearings of different size
// example: degree = 5, then number of bearings is 2^4 = 16 in each segment
// if degree is zero, it draws a straight line
//  gaps or spacing is implemented in this version
function lineOfContactRelative(geo, pointa, pointb, degree = 0, bearingSpacing = 4, spaceBetween = 3) {

    if (degree <= 0) {
        geo.push(pointa, pointb)
        return geo;
    }

    const width = ms.geometry.distanceBetween(pointa, pointb);
    const midpoint = ms.geometry.pointBetween(pointa, pointb, 0.5);
    const curveBearing = ms.geometry.bearingBetween(pointa, pointb);

    if (degree === 1) {
        var bearingGeo1 = [];
        var bearingGeo2 = [];
        for (var i = 0; i <= 180; i += 10) {
            bearingGeo1.push(
                ms.geometry.toDistanceBearing(
                    ms.geometry.toDistanceBearing(midpoint, (width + spaceBetween) / 2, curveBearing + 90),
                    width / 2 - bearingSpacing / 2,
                    curveBearing + i + 180
                )
            );
        }
        // adding a second line of bearings turned
        for (var j = 180; j <= 360; j += 10) {
            bearingGeo2.push(
                ms.geometry.toDistanceBearing(
                    // shift all bearings towards center of line
                    ms.geometry.toDistanceBearing(midpoint, (width + spaceBetween) / 2, curveBearing - 90),
                    width / 2 - bearingSpacing / 2,
                    curveBearing + j + 180
                )
            )
        }
        geo.push(bearingGeo1)
        geo.push(bearingGeo2)
    } else {
        geo = lineOfContactRelative(geo, pointa, midpoint, degree - 1)
        geo = lineOfContactRelative(geo, midpoint, pointb, degree - 1)
    }
    return geo;
}

function lineOfContactAbsolute(geo, pointa, pointb, bearingWidth, bearingSpacing, spaceBetween) {
    var midpoint;
    // measure distance between each two points
    let distance = ms.geometry.distanceBetween(pointa, pointb);
    // calculate how many bearings can fit
    let widthMeasure = 0;
    let numBearings = 0;
    // if segment is longer than at least one bearing, calculate number and length of bearing line
    if (bearingWidth < distance) {
        numBearings = 1;
        widthMeasure = widthMeasure + bearingWidth;
        if (widthMeasure <= distance) {
            while (widthMeasure <= distance) {
                widthMeasure = widthMeasure + bearingSpacing + bearingWidth;
                numBearings = numBearings + 1;
            }
            // correction due to overshoot in while loop
            numBearings = numBearings - 1;
            widthMeasure = widthMeasure - bearingSpacing - bearingWidth;
        }
    }
    // calculate padding on the sides of the segment
    let padding = ((distance - widthMeasure) / 2)

    // loop for number of bearings, move the starting point and create the bearing
    for (var i = 1; i <= numBearings; i += 1) {

        // initialising both lines of contact
        var bearingGeo1 = [];
        var bearingGeo2 = [];

        // draw bearings of constant size along the dedicated segment, starting at a point offset by the internal padding
        let leftAnchor = ms.geometry.pointBetweenAbsolute(
            pointa, pointb, (padding + ((i * bearingWidth) - bearingWidth) + (i - 1) * bearingSpacing)
        );
        let rightAnchor = ms.geometry.pointBetweenAbsolute(
            pointa, pointb, (padding + ((i * bearingWidth)) + (i - 1) * bearingSpacing)
        );
        let curveBearing = ms.geometry.bearingBetween(leftAnchor, rightAnchor);
        midpoint = ms.geometry.pointBetweenAbsolute(
            pointa, pointb, (padding + ((i * bearingWidth) - bearingWidth / 2) + (i - 1) * bearingSpacing)
        );
        // actually visualising the bearing
        for (var j = 0; j <= 180; j += 10) {
            bearingGeo1.push(
                ms.geometry.toDistanceBearing(
                    // shift all bearings towards center of line and add width of LOC
                    ms.geometry.toDistanceBearing(midpoint, (bearingWidth + spaceBetween) / 2, curveBearing + 90),
                    bearingWidth / 2,
                    curveBearing + j + 180
                )
            )
        }
        // adding a second line of bearings turned
        for (var j = 180; j <= 360; j += 10) {
            bearingGeo2.push(
                ms.geometry.toDistanceBearing(
                    // shift all bearings towards center of line and add width of LOC
                    ms.geometry.toDistanceBearing(midpoint, (bearingWidth + spaceBetween) / 2, curveBearing - 90),
                    bearingWidth / 2,
                    curveBearing + j + 180
                )
            );
        }
        geo.push(bearingGeo1);
        geo.push(bearingGeo2);
    }

    return geo;
}

export default lineOfContact;