import LatLon from 'geodesy/latlon-spherical';

// Calculates the bearing between two points

export function bearingBetween(p1, p2) {

  const point1 = new LatLon(p1[1], p1[0]);
  const point2 = new LatLon(p2[1], p2[0]);

  return point1.initialBearingTo(point2);
}

