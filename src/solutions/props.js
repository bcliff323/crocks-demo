import Maybe from "crocks/Maybe";
import safe from "crocks/Maybe/safe";
import { compose, isNil, not } from "ramda";
import { increment, log, safeProp } from "../utils";
import isNumber from "crocks/predicates/isNumber";
import prop from "crocks/Maybe/prop";
import propPath from "crocks/Maybe/propPath";

const isNotNil = compose(
  not,
  isNil
);

/**
 * Shallow prop access
 */
const queryString = {
  page: 1,
  pageSize: 10,
  totalPages: 203
};

//const page = Maybe.Just(queryString.page);
//const page = safe(isNotNil, queryString.page);
//const page = safeProp("page", queryString);
const page = prop("page", queryString);

//const nextPage = page.map(increment).option(1);

const nextPage = page
  .chain(safe(isNumber), safe(isNotNil))
  .map(increment)
  .option(1);

//log(`pagination: ${nextPage}`);

/**
 * Nested prop access
 */
const user = {
  first: "John",
  last: "Doe",
  address: {
    street: "Sesame",
    zip: 12345
  }
};

const zip = propPath(["address", "zip"], user).option("zip not available");
//log(`pagination: ${zip}`);
