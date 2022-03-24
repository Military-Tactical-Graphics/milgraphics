import LatLon from 'geodesy/latlon-spherical';

/**
 * Calculates a point between two other points at any fractional distance f between them
 * @param {[number, number]} p1 First point
 * @param {[number, number]} p2 Second point
 * @param {number} f Fraction between the two points (0 = this point, 1 = specified point).
 * @returns {[number, number]} Point coordinates
 */
export function pointBetween(p1, p2, f) {
  
  const point1 = new LatLon(p1[1], p1[0]);
  const point2 = new LatLon(p2[1], p2[0]);

  const newPoint = point1.intermediatePointTo(point2, f);

  return [newPoint.lng, newPoint.lat];
}

