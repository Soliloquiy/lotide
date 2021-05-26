const eqArrays = function(arr1, arr2) {
  let decider = true;
  for (let i = 0; i < arr1.length; i++) {
    if(arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        decider = true;
      } else {
        decider = false;
      }
      
    } else {
      decider = false;
    }
  }
  return decider;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: Arrays are equal`);
  } else {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: Arrays are not equal`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3])

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);