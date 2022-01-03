String.prototype.replaceAt = function(index, replacement) {
  return this.slice(0, index) + replacement + this.slice(index + replacement.length);
}

const caesar = function(message, shift) {
  // JS deals with negative numbers in the mod operation in a slightly weird
  // way, so we have to do this
  // shift % 26                ==>  -5 % 26 = -5
  // ((shift % 26) + 26) % 26  ==>  -5 % 26 = 21
  shift = ((shift % 26) + 26) % 26;

  let charCode;
  let newMessage = message;
  for (let i = 0; i < message.length; i++) {
    charCode = message.charCodeAt(i);

		// Uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      charCode += shift;
      if (charCode > 90) {
        charCode -= 26;
      }
      newMessage = newMessage.replaceAt(i, String.fromCharCode(charCode));
    }
    // Lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      charCode += shift;
      if (charCode > 122) {
        charCode -= 26;
      }
      newMessage = newMessage.replaceAt(i, String.fromCharCode(charCode));
    }
  }

  return newMessage;
}

// Do not edit below this line
module.exports = caesar;
