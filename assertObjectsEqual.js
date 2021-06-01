const eqObjects = function(object1, object2) {
  //check length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }//check eqarray
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
return true; 
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;