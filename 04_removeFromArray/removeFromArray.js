const removeFromArray = function(array) {
  // This function expects an array and some elements to remove from the array
  // If there's nothing to remove, return the array
  if (arguments.length < 2) return array;

  let elementPos;
  for (let i = 1; i < arguments.length; i++) {
    elementPos = array.indexOf(arguments[i]);
    
    if (elementPos !== -1) {
      array.splice(elementPos, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
