import ms from "../../index";
import { Feature } from "ol";

/**
 * Draws a circle with a radius in meters
 * @param {Feature} feature LineString geometry (two points)
 * @returns {object} Circle geometry (geometry type is Polygon)
 */
function circleWithRadius(feature) {
  var p = feature.geometry.coordinates;
  var r = feature.properties.distance;
  var geometry = { type: "Polygon", coordinates: [[]] };
  for (var direction = 360; direction >= 0; direction -= 5) {
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(p, r, direction)
    );
  }
  return { geometry: geometry };
};

export default circleWithRadius;