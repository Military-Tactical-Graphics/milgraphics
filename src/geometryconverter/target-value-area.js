import createZone from '../geometry/createZone';

export default function(feature) {
  return createZone(feature, 'TVAR', true);
};
