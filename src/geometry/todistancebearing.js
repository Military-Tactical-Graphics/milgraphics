import LatLon from 'geodesy/latlon-spherical';

// Calculates the bearing between two points in meter
export function toDistanceBearing(point, dist, bearing) {
  const point1 = new LatLon(point[1], point[0]);
  const newPoint = point1.destinationPoint(dist, bearing);

  return [newPoint.lng, newPoint.lat];
}

