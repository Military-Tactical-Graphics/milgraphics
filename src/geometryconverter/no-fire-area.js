import createZone from '../geometry/createZone';

export default function (feature) {
    feature.properties.fill = 'dashes';
    return createZone(feature, ' NFA\n', false, true);
}
