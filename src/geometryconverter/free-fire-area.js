import ms from '../../index';
import createZone from '../geometry/createZone';

export default function(feature) {
  return createZone(feature, "FFA", true, true);
};
