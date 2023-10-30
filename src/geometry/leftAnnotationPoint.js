/**
 * Get left point position
 * @param {[number, number][]} coordinates polygon coordinates
 * @returns {[lon, lat]} point
 */
export function getLeftPoint(coordinates) {
  let X = coordinates[0][0];
  let Y = coordinates[0][1];

  coordinates.forEach(([lon, lat]) => {
    if (lon < X) {
      X = lon;
      Y = lat;
    }
  });

  return [X, Y];
}
