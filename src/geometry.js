import { bearingBetween } from "./geometry/bearingbetween.js";
import { distanceBetween } from "./geometry/distancebetween.js";
import { pointBetween  } from "./geometry/pointbetween.js";
import { toDistanceBearing } from "./geometry/todistancebearing.js";
import { crossTrackDistance } from "./geometry/crossTrackDistance.js";
import circlecorridorpolygon from "./geometry/circlecorridorpolygon.js";
import circleWithRadius from "./geometry/circle.js";
import corridor from "./geometry/corridor.js";
import rectangle from "./geometry/rectangle.js";
import pointBetweenAbsolute from "./geometry/pointbetweenabsolute.js";

export const geometry = {
    bearingBetween,
    distanceBetween,
    toDistanceBearing,
    crossTrackDistance,
    circle: circleWithRadius,
    circleCorridorPolygon: circlecorridorpolygon,
    corridor: corridor,
    isClockwise: require("./geometry/isclockwise.js"),
    pointBetween,
    pointBetweenAbsolute,
    rectangle,
    testGeometry: require("./geometry/testGeometry.js"),
    addAnnotation: require("./geometry/annotations.js")
};
