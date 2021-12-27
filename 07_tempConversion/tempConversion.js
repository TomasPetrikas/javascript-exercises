const ftoc = function(temperature) {
  let result = +(((temperature - 32) * 5/9).toFixed(1));
  return result;
};

const ctof = function(temperature) {
  let result = +(((temperature * 9/5) + 32).toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
