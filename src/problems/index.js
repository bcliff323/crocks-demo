import { log, increment, toUpperCase } from "../utils";

/**
 * Everything works fine with numbers.
 *
 * But what about?
 *  - null values
 *  - non-number values
 */
const incrementedNumber = increment(2);
//log(`incremented: ${incrementedNumber}`);

/**
 * Everything works fine with strings.
 *
 * But what about?
 *  - null values
 *  - non-string values
 */
const uppercased = toUpperCase("foo");
//log(`uppercased: ${uppercased}`);

/**
 * Everything works fine if prop exist. But what
 * if it is missing, or is an unexpected type?
 */
const obj = {
  child: 1
};
const prop = increment(obj.child);
//log(`properties: ${prop}`);

/**
 * Everything works fine if nested objects exist. But what
 * if they are missing, or are an unexpected type?
 */
const obj2 = {
  child: {
    one: 1,
    two: null,
    three: ""
  }
};
const prop2 = increment(obj2.child.one);
//log(`properties: ${prop2}`);
