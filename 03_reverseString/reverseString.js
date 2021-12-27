const reverseString = function(str) {
  // "Hello" => ["H", "e", "l", "l", "o"]
  let splitString = str.split("");

  // ["H", "e", "l", "l", "o"] => ["o", "l", "l", "e", "H"]
  let reverseArray = splitString.reverse();

  // ["o", "l", "l", "e", "H"] => "olleH"
  let reverseString = reverseArray.join("");

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
