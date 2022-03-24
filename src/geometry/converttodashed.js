var ms = require("milsymbol");

/**
 * Convert LineString to Dashed MultiLineString
 * @param {[number, number][]} lineString Line coordinates 
 * @param {number} segmentInterval Segment interval 
 * @returns {[number, number][][]} MultiLinestring coordinates
 */
function convertToDashed(lineString, segmentInterval) {
  if (segmentInterval <= 0)
    throw new Error("segmentInterval must be greater than 0");

  let dashes = [];

  // Get the lineString's total length (in meters)
  let lineLength = 0;
  for (let i = 0; i < lineString.length - 1; i++) {
    lineLength += parseFloat(ms.geometry.distanceBetween(lineString[i], lineString[i + 1]));
  }

  const segmentLength = lineLength * segmentInterval;

  let numberOfSegments = lineLength / segmentLength;

  // If numberOfSegments is integer, no need to plus 1
  if (!Number.isInteger(numberOfSegments))
    numberOfSegments = Math.floor(numberOfSegments) + 1;

  for (let i = 0; i < numberOfSegments; i++) {
    const slice = lineSliceAlong(
      [...lineString],
      segmentLength * i,
      segmentLength * (i + 1)
    );
    dashes.push(slice);
  }

  return dashes.filter((slice, i) => i % 2 === 0);
}

function lineSliceAlong(lineString, startDist, stopDist) {
  var slice = [];

  var origCoordsLength = lineString.length;
  var travelled = 0;
  var overshot, direction, interpolated;
  for (var i = 0; i < lineString.length; i++) {
    if (startDist >= travelled && i === lineString.length - 1) {
      break;
    }
    else if (travelled > startDist && slice.length === 0) {
      overshot = startDist - travelled;
      if (!overshot) {
        slice.push([...lineString[i]]);
        return slice;
      }
      direction = ms.geometry.bearingBetween(lineString[i], lineString[i - 1]) - 180;
      interpolated = ms.geometry.toDistanceBearing(lineString[i], overshot, direction);
      slice.push([...interpolated]);
    }

    if (travelled >= stopDist) {
      overshot = stopDist - travelled;
      if (!overshot) {
        slice.push([...lineString[i]]);
        return slice;
      }
      direction = ms.geometry.bearingBetween(lineString[i], lineString[i - 1]) - 180;
      interpolated = ms.geometry.toDistanceBearing(lineString[i], overshot, direction);
      slice.push([...interpolated]);
      return slice;
    }

    if (travelled >= startDist) {
      slice.push([...lineString[i]]);
    }

    if (i === lineString.length - 1) {
      return slice;
    }

    travelled += parseFloat(ms.geometry.distanceBetween(lineString[i], lineString[i + 1]));
  }

  if (travelled < startDist && lineString.length === origCoordsLength)
    throw new Error("Start position is beyond line");

  var last = lineString[lineString.length - 1];
  return [last, last];
}

module.exports = convertToDashed;
