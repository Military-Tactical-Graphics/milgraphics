import ms from "../../index";
import { Feature } from "ol";

/**
 * Draws a circle with a radius in meters
 * @param {Feature} feature LineString geometry (two points)
 * @returns {object} Circle geometry (geometry type is Polygon)
 */
function circlecorridorpolygon(feature) {
    var geometry;
    switch (feature.geometry.type) {
        case "Point":
            geometry = ms.geometry.circle(feature).geometry;
            break;
        case "LineString":
            geometry = ms.geometry.rectangle(feature).geometry;
            break;
        case "Polygon":
            geometry = { type: feature.geometry.type };
            geometry.coordinates = feature.geometry.coordinates;
            break;
        default:
            console.warn("Invalid feature type in SIDC: " + feature.properties.sidc);
    }

    return { geometry: geometry };
};

export default circlecorridorpolygon;