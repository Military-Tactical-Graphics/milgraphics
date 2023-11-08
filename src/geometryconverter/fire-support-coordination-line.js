import { labeledLine } from '../geometry/labeledLine';

export default function(feature) {
    return labeledLine(feature, "FSCL", true);
};