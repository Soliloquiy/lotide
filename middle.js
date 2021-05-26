const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: Arrays are equal`);
  } else {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: Arrays are not equal`);
  }
};

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

const middle = function(array) {
  let finalarray = [];
  if ((array.length === 1) || (array.length === 2)) {
    return [];
  } else if (array.length % 2 != 0) {
    let mid = array.length / 2 + 0.5;
    finalarray.push(mid);
    return finalarray;
  } else {
    let mid1 = array.length / 2;
    let mid2 = mid1 + 1;
    finalarray.push(mid1, mid2);
    return finalarray;
  }
};

assertArraysEqual([2], middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));