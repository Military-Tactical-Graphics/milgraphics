const { createAreas } = require("../geometry/createAreas");

module.exports = function (feature) {
  return createAreas(feature, 'ARA');
}
