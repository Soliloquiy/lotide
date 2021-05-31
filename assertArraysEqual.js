const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: Arrays are equal`);
  } else {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: Arrays are not equal`);
  }
};

module.exports = assertArraysEqual;