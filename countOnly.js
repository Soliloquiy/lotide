const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x274C) + ` Assertion Failed: ${actual} != ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
//if item exists in results, add one to value
    if (results[item]) {
      results[item] += 1;
//if item does not exist currently, but exists in itemstoCount, create new key value
    } else if (itemsToCount[item]) {
      results[item] = 1;
    }
  }
//if item is not present in itemsToCount, continues iteration because undefined is falsey
  return results;
  
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
