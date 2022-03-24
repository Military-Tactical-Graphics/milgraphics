import { bearingBetween } from "./geometry/bearingbetween.js";
import { distanceBetween } from "./geometry/distancebetween.js";
import { pointBetween  } from "./geometry/pointbetween.js";
import { toDistanceBearing } from "./geometry/todistancebearing.js";

export let geometry = {};

geometry.bearingBetween = bearingBetween;
geometry.circle = require("./geometry/circle.js");
geometry.circleCorridorPolygon = require("./geometry/circlecorridorpolygon.js");
geometry.corridor = require("./geometry/corridor.js");
geometry.distanceBetween = distanceBetween;
geometry.isClockwise = require("./geometry/isclockwise.js");
geometry.pointBetween = pointBetween;
geometry.pointBetweenAbsolute = require("./geometry/pointbetweenabsolute.js");
geometry.rectangle = require("./geometry/rectangle.js");
geometry.toDistanceBearing = toDistanceBearing;
geometry.testGeometry = require("./geometry/testGeometry.js");
geometry.addAnotation = require("./geometry/anotations.js");
