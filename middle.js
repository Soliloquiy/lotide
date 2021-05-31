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

module.exports = middle;