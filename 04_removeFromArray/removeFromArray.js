const removeFromArray = function() {
  let finalArray = arguments[0];

  for (let index = 1; index < arguments.length; index++) {
    const foundIndex = finalArray.indexOf(arguments[index]);
    if (foundIndex > -1)
      finalArray.splice(foundIndex, 1);
  }

  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
