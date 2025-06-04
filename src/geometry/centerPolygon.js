import { Polygon } from "ol/geom";
import { getCenter } from 'ol/extent';

/**
 * Draws a circle with a radius in meters
 * @param {Feature} feature LineString geometry (two points)
 * @returns {object} Circle geometry (geometry type is Polygon)
 */
export function centerPolygon(feature) {
  const EXTENT = new Polygon(feature.geometry.coordinates).getExtent();
  return getCenter(EXTENT);
};
