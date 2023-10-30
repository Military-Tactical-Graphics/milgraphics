import { createCorridor } from "../geometry/createCorridor";

export function airCorridor(feature) {
   return createCorridor(feature, 'AC');
};