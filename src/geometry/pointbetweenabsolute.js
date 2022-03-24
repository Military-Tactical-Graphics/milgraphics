var ms = require("milsymbol");

/**
 * Calculates a point between two points p1 and p2 at any absolute distance l from p1 in the direction of p2
 * @param {[number, number]} p1 First point
 * @param {[number, number]} p2 Second point
 * @param {number} l Absolute distance
 * @returns {[number, number]} Point coordinates
 */
function pointBetweenAbsolute(p1, p2, l) {
  // This can be optimized for performance by using the math directly, but this works the same and was quicker to implement

  // Calculate fraction of length
  const frac = (l/ms.geometry.distanceBetween(p1, p2));

  // Designate the particular point using the fractional based function
  const p3 = ms.geometry.pointBetween(p1, p2, frac);

  return p3;
}

module.exports = pointBetweenAbsolute;
