function pigLatin(string) {
  string = string.toLowerCase();
  const consonants = "bcdfghjklmnpqrstvwxz";
  const vowels = "aeiouy";

  // Check if we have multiple words
  if (string.includes(" ")) {
    words = string.split(" ");
    const pigWords = words.map(word => {
      return pigLatin(word);
    });
    return pigWords.join(" ");
  }
  // Single word logic
  else {
    let firstConsonants = "";
    let stillCollecting = true;
    for (let i = 0; i < string.length; i++) {
      if (stillCollecting) {
        if (consonants.includes(string[i])) {
          firstConsonants += string[i];
        }
        else {
          stillCollecting = false;
        }
      }
      else {
        string = string.replace(firstConsonants, "");
        return string + firstConsonants + "ay";
      }
    }
  }
}
  
// Do not edit below this line
module.exports = pigLatin;
