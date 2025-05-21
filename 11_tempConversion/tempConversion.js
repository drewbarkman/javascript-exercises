const convertToCelsius = function(fahrenheitNum) {
  return Math.round((fahrenheitNum - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function(celsiusNum) {
  return Math.round((celsiusNum * (9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
