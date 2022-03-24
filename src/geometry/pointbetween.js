import LatLon from 'geodesy/latlon-spherical';

// Calculates a point between two other points at any fractional distance f between them
export function pointBetween(p1, p2, f) {
  
  const point1 = new LatLon(p1[1], p1[0]);
  const point2 = new LatLon(p2[1], p2[0]);

  const newPoint = point1.intermediatePointTo(point2, f);

  return [newPoint.lng, newPoint.lat];
}

