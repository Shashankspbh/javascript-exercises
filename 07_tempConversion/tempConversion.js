const convertToCelsius = function (fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9);
  celsius = celsius.toFixed(1);
  return Number(celsius);
};

const convertToFahrenheit = function (celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheit = fahrenheit.toFixed(1);
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
