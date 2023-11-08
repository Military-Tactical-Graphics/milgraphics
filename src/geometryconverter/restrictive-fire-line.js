const { labeledLine } = require("../geometry/labeledLine");

export default function(feature) {
    return labeledLine(feature, "RFL");
};