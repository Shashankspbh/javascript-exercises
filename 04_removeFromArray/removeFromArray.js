const removeFromArray = function (array, ...args) {
  const filteredArray = array.filter(function (element) {
    return !args.includes(element);
  });
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
