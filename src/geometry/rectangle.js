import ms from '../../index';
import { Feature } from "ol";

/**
 * Create rectangle geometry from LineString
 * @param {Feature} feature LineString geometry (two points)
 * @returns {object} Rectangle geometry (geometry type is Polygon)
 */
function rectangle(feature) {
  // A rectangle is just a two point corridor
  return ms.geometry.corridor(feature);
};

export default rectangle;