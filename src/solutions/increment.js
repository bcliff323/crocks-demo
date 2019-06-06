import {
  log,
  increment,
  double,
  toUpperCase,
  safeNumber,
  safeString
} from "../utils";
import { Maybe } from "crocks";
import safe from "crocks/Maybe/safe";
import isNumber from "crocks/predicates/isNumber";
import isString from "crocks/predicates/isString";
import compose from "crocks/helpers/compose";

// Safe increment
const input = 1;
const incrementedNumber = typeof input === "number" ? increment(input) : 0;
//log(`incremented: ${incrementedNumber}`);

/**
 * Maybe wraps values in order to differentiate values we want
 * to act on and values we don't want to act on.
 *
 * Maybe is a Union Type
 *  - Just | Nothing
 */
//const input2 = Maybe.Just(2);
//const input2 = Maybe.Just("foo");
//const input2 = Maybe.Just(null);
//const input2 = Maybe.Just(NaN);
//const input2 = Maybe.Nothing();
//const input2 = safeNumber(1);
//const input2 = safe(isNumber, 1);
const safeNum = safe(isNumber);
const input2 = safeNum(1);

const incrementedNumber2 = input2.map(increment).option();
//log(`incremented: ${incrementedNumber2}`);

/**
 * You can chain operations using Maybe's map method
 */
// const incrementDouble = n => {
//   const incremented = increment(n);
//   return double(incremented);
// };

// const incrementDouble = (n, def) =>
//   safe(isNumber, n)
//     .map(increment)
//     .map(double)
//     .option(def);

const incrementDouble = (n, def) =>
  safe(isNumber, n)
    .map(
      compose(
        double,
        increment
      )
    )
    .option(def);

const incDoubled = incrementDouble(3, 3);
//const incDoubled = incrementDouble(2, 3);
//log(`inc double: ${incDoubled}`);
