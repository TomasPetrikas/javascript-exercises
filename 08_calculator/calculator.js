const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	const totalSum = numbers.reduce((total, number) => {
    return total + number;
  }, 0);
  return totalSum;
};

const multiply = function(numbers) {
  if (numbers.length === 0) return 0;

  const totalSum = numbers.reduce((total, number) => {
    return total * number;
  }, 1);
  return totalSum;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	if (n === 0) return 1;
  else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
