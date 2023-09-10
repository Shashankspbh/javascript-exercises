const sumAll = function (first, last) {
  let sum = 0;
  if (first < 0) return "ERROR";
  else if (typeof last != "number") return "ERROR";
  else {
    first > last ? ([first, last] = [last, first]) : undefined;
    for (first; first <= last; first++) {
      sum += first;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
