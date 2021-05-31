const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = function(str) {
  const result = {};
  for (num of str) {
    if (num === " ") {
      continue;
    }
    if (result[num]) {
      result[num] += 1;
    } else {
      result[num] = 1;
    }
  }
  return result;
}

module.exports = countLetters;