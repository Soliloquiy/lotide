const assertArraysEqual = function(decider) {
  if (decider) {
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

const without = function(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    let include = arr2.includes(arr1[i]);
    if (!include) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;