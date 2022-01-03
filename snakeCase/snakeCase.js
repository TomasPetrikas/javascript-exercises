String.prototype.replaceAt = function(index, replacement) {
  return this.slice(0, index) + replacement + this.slice(index + replacement.length);
}

// I acknowledge that this is incredibly ugly
const snakeCase = function(str) {
  str = str.replace(/ /g, "_"); // Replace spaces with underscores
  str = str.replace(/[.,?]/g, ""); // Remove "," and "?"
  str = str.replace(/-/g, "_"); // Replace "-" with underscores

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // Check if uppercase
    if (charCode >= 65 && charCode <= 90) {
      // Convert to lowercase
      charCode += 32;

      if (i != 0 && i != str.length - 1 && str[i-1] != "_") {
        str = str.slice(0, i) + "_" + String.fromCharCode(charCode) + str.slice(i + 1);
      }
      else {
        str = str.replaceAt(i, String.fromCharCode(charCode));
      }
    }
  }

  return str;
};

// Do not edit below this line
module.exports = snakeCase;
