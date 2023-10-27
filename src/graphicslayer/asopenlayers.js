var GeoJSON = require('ol/format/GeoJSON');
// const {
//   default: UrlTile
// } = require('ol/source/UrlTile');
var style = require('ol/style');
var makePattern = require('./makepattern');
var ms = require('milsymbol');

function asOpenLayers(crs) {
    crs = crs || "EPSG:3857";
    //var ua = window.navigator.userAgent;
    // var isIE = ( ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/')  > 0) ? true : false;
    var features = [];
    for (var i = 0; i < this.data.features.length; i++) {
        var feature = this.data.features[i];
        var olFeature = GeoJSON.default.prototype.readFeature(feature, {
            dataProjection: 'EPSG:4326',
            featureProjection: crs
        });

        if (olFeature.getGeometry() && olFeature.getGeometry().getType() == "Point") {
            var properties = olFeature.getProperties();
            if (properties.sidc.charAt(0) != "X") {
                //TODO handle sitaware custom graphics
                var milsymbol = this.data.features[i].symbol;
                // var image = isIE ? mysymbol.asCanvas() : mysymbol.toDataURL();
                var image = 'data:image/svg+xml,' + milsymbol.asSVG().toString();
                olFeature.setStyle(
                    new style.Style({
                        image: new style.Icon({
                            anchor: [
                                milsymbol.getAnchor().x,
                                milsymbol.getAnchor().y
                            ],
                            anchorXUnits: "pixels",
                            anchorYUnits: "pixels",
                            imgSize: [
                                Math.floor(milsymbol.getSize().width),
                                Math.floor(milsymbol.getSize().height)
                            ],
                            src: image
                        })
                    })
                );
            }
        }

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



        const COLOR = COLOR_BY_AFFILIATION_TYPES[olFeature.getProperties().sidc.charAt(1) || '-'];

        var styles = [
            new style.Style({
                stroke: new style.Stroke({
                    lineCap: "butt",
                    color: COLOR,
                    width: 2
                })
            })
        ];

        if (feature.graphic.isConverted() && (olFeature.getGeometry().getType() == "LineString" ||
                olFeature.getGeometry().getType() == "MultiLineString")) {
            if (feature.graphic.annotations) {
                styles = styles.concat(createAnnotationsStyle(feature.graphic.annotations, crs, COLOR));
            }
            olFeature.setStyle(styles);
        }

        if (feature.graphic.isConverted() && olFeature.getGeometry().getType() == "Polygon") {
            if (feature.properties.fill == "dashes") {

                var pattern = makePattern(COLOR, 'obliqueRight', 15);
                styles[0].setFill(
                    new style.Fill({
                        color: pattern
                    })
                );


            } else {
                styles[0].setFill(
                    new style.Fill({
                        color: 'transparent'
                    })
                );
            }

            if (feature.graphic.annotations) {
                if (!feature.graphic.annotations[0].geometry.coordinates) {
                    styles[0].setText(getText(feature.graphic.annotations[0].properties.text, COLOR));
                }
                styles = styles.concat(createAnnotationsStyle(feature.graphic.annotations, crs, COLOR));
            }
            olFeature.setStyle(styles);
        }


        features.push(olFeature);
    }

    return features;
}

function createAnnotationsStyle(annotations, crs, color) {
    var add_styles = [];
    for (var a = 0; a < annotations.length; a++) {
        if (annotations[a].geometry.coordinates) {
            var labelgeom = GeoJSON.default.prototype.readFeature(annotations[a].geometry, {
                dataProjection: 'EPSG:4326',
                featureProjection: crs
            }).getGeometry();
            add_styles.push(
                new style.Style({
                    text: getText(annotations[a].properties.text, color, annotations[a].properties.angle),
                    geometry: labelgeom
                })
            );
        }
    }
    return add_styles;
}

function getText(text, color, angle = 0) {
    angle = angle > 180 ? angle - 180 : angle;
    return new style.Text({
        fill: new style.Fill({
            color: color
        }),
        font: "bold 16px monospace",
        textAlign: 'left',
        // stroke: new style.Stroke({
        //     color: "rgb(239, 239, 239)", // off-white
        //     width: 4
        // }),
        text: text,
        rotation: angle * (Math.PI / 180)
        
    });
}

module.exports = asOpenLayers;