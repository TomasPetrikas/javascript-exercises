// 1 + 2 + 3 + ... + n  =  n * (n + 1) / 2
// Wanted to do this one without loops
const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) ||
    start < 0 || end < 0) {
    return "ERROR";
  }
  
  if (start > end) {
    [start, end] = [end, start];
  }

  let howMany = end - start + 1;
  let adjustment = (start - 1) * howMany;
  let result = howMany * (howMany + 1) / 2 + adjustment;

  return result;
};

// Do not edit below this line
module.exports = sumAll;
