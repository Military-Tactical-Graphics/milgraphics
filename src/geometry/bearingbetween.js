import LatLon from 'geodesy/latlon-spherical';

/**
 * Calculates the bearing between two points
 * @param {[number, number]} p1 First point
 * @param {[number, number]} p2 Second point
 * @returns {number} Initial bearing in degrees from north (0°..360°)
 */
export function bearingBetween(p1, p2) {

  const point1 = new LatLon(p1[1], p1[0]);
  const point2 = new LatLon(p2[1], p2[0]);

  return point1.initialBearingTo(point2);
}

