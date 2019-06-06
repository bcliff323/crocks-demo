import { Maybe } from "crocks";
import { compose, isNil, not } from "ramda";

export function log(message) {
  console.log(message);
}

export function increment(int) {
  return int + 1;
}

export function double(int) {
  return int * 2;
}

export function toUpperCase(message) {
  return message.toUpperCase();
}

export const isNumber = val => typeof val === "number";
export const isString = val => typeof val === "string";

export function safeNumber(val) {
  return isNumber(val) ? Maybe.Just(val) : Maybe.Nothing();
}

export function safeString(val) {
  return isString(val) ? Maybe.Just(val) : Maybe.Nothing();
}

export function safe(predicate, val) {
  return predicate(val) ? Maybe.Just(val) : Maybe.Nothing();
}

const isNotNil = compose(
  not,
  isNil
);

export const safeProp = (propName, obj) => safe(isNotNil, obj[propName]);
