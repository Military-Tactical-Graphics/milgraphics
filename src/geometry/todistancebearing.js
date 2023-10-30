import LatLon from 'geodesy/latlon-spherical';

// Calculates the bearing between two points in meter
/**
 * Calculate destination point from current point, distance and bearing
 * @param {[number, number]} point Current point
 * @param {number} distance Distance
 * @param {number} bearing Bearing
 * @returns {[number, number]} Destination point
 */
export function toDistanceBearing(point, distance, bearing) {
  const point1 = new LatLon(point[1], point[0]);
  const newPoint = point1.destinationPoint(distance, bearing);

  return [newPoint.lng, newPoint.lat];
}

