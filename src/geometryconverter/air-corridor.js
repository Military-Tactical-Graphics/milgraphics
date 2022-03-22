const { createCorridor } = require("../geometry/createCorridor");

module.exports = function(feature) {
   return createCorridor(feature, 'AC');
};