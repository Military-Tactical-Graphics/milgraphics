/**
 * Add annotationPoint with text
 * @param {[number, number]} coordinates Anchor point for annotation
 * @param {string} text Annotation text
 * @param {object} options angle, align ['left', 'right', 'center', 'end', 'start']
 * @returns {object} geometry object
 */
function addAnnotation(coordinates, text, options) {
    return ({
        geometry: {
            coordinates,
            type: "Point"
        },
        properties: {
            text,
           ...options
        }
    });
}

module.exports = addAnnotation;