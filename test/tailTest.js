const assert = require('chai').assert;
const tail = require('../tail');

describe('#middle', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns 2 for length of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); 
  });

  it('returns 3 for length of original array ["Hello", "Lighthouse", "Labs"]', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3); 
  });

});
