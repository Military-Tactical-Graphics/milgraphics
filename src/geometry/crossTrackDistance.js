import LatLon from 'geodesy/latlon-spherical';

/**
 * Returns distance from current point to great circle defined by start-point and end-point.
 * 
 * @param   {[number, number]} pathStart - Start point of great circle path.
 * @param   {[number, number]} pathEnd - End point of great circle path.
 * @param   {[number, number]} currentPoint - Current point.
 * @returns {number} Distance.
 * 
 */
export function crossTrackDistance(pathStart, pathEnd, currentPoint) {

  const point = new LatLon(currentPoint[1], currentPoint[0]);
  const path1 = new LatLon(pathStart[1], pathStart[0]);
  const path2 = new LatLon(pathEnd[1], pathEnd[0]);

  return point.crossTrackDistanceTo(path1, path2);
}
