const fibonacci = function(n) {
  if (n < 0) return "OOPS";

  // Sum the series? Like a pleb? Who do you take me for?
  // Binet's Fibonacci Number Formula
  // https://mathworld.wolfram.com/BinetsFibonacciNumberFormula.html

  const phi = (1 + Math.sqrt(5)) / 2;
  const F_n = (phi**n - (-phi)**(-n)) / Math.sqrt(5);

  return Math.round(F_n);
}


// Do not edit below this line
module.exports = fibonacci;
