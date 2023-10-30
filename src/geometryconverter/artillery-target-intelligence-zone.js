import createZone from '../geometry/createZone';

function artilleryTargetIntelligenceZone(feature) {
  return createZone(feature, 'ATI');
};

export default artilleryTargetIntelligenceZone;
