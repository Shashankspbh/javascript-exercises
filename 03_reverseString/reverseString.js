const reverseString = function (string) {
  let alphas = [...string];
  let outString = "";
  for (let i = alphas.length; i > 0; i--) {
    outString += alphas[i - 1];
  }
  return outString;
};

// Do not edit below this line
module.exports = reverseString;
