import ArmyXML from "./format/armyxml.js";
import GeoJSONFormat from "./format/geojson.js";
import SLF from "./format/slf.js";
import NVG from "./format/nvg.js";

/**
 * Format
 * @module ms/format
 */
const format = {
    ArmyXML,
    NVG,
    SLF,
    GeoJSON: GeoJSONFormat
};

export default format;
