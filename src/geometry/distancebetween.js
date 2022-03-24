import LatLon from 'geodesy/latlon-spherical';

// Calculates the great circle distance between two points in meter
export function distanceBetween(p1, p2) {
  const point1 = new LatLon(p1[1], p1[0]);
  const point2 = new LatLon(p2[1], p2[0]);

  return point1.distanceTo(point2).toFixed(1); // we don't expect more precision than this...
}
