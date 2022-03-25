/**
 * Add annotationPoint with text
 * @param {[number, number]} coordinates Anchor point for annotation
 * @param {string} text Annotation text
 * @returns {object} geometry object
 */
function addAnnotation(coordinates, text) {
    return ({
        geometry: {
            coordinates,
            type: "Point"
        },
        properties: {
            text
        }
    });
}

module.exports = addAnnotation;