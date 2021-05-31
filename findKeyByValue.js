const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let found;
  for (const key in obj) {
    if (value === obj[key]) {
      return key;
    } else {
      found = false;
    }
  }
  if (!found) {
    return undefined;
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;