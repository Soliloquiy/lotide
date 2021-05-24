const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: ${actual} != ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
