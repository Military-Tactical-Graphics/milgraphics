var ms = require('milsymbol');

let MS_COLOR = ms.getColorMode('Medium');

const COLOR_BY_AFFILIATION_TYPES = {
    '-': '#000000',
    P: MS_COLOR.Unknown,
    U: MS_COLOR.Unknown,
    A: MS_COLOR.Friend,
    F: MS_COLOR.Friend,
    N: MS_COLOR.Neutral,
    S: MS_COLOR.Hostile,
    H: MS_COLOR.Hostile,
    G: MS_COLOR.Unknown,
    W: MS_COLOR.Unknown,
    D: MS_COLOR.Friend,
    L: MS_COLOR.Neutral,
    M: MS_COLOR.Friend,
    J: MS_COLOR.Hostile,
    K: MS_COLOR.Hostile,
    O: MS_COLOR.Unknown
};


function asGeoJSON(crs) {
    crs = crs || "EPSG:3857";

    var features = [];
    this.data.features.forEach(feature => {
        const COLOR = COLOR_BY_AFFILIATION_TYPES[feature.properties.sidc.charAt(1) || '-'];
        features.push({
            type: "Feature",
            geometry: feature.geometry,
            properties: {
                ...feature.properties,
                color: COLOR
            }
        });

        (feature.graphic.annotations || []).forEach((annotation) => {
            features.push({
                type: "Feature",
                ...annotation,
                properties: {
                    ...annotation.properties,
                    color: COLOR
                }
            });
        });
    });

    return {
        features,
        type: "FeatureCollection"
    };
}


module.exports = asGeoJSON;