const palindromes = function (str) {
  // The regex strips non-alphanum characters from str
  str = str.replace(/\W/g, '').toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
