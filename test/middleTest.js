const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual([2], middle([1, 2, 3]));