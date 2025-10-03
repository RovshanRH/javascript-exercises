const convertToCelsius = function(num) {
  return Math.round((num - 32) * Math.round(5/9))
};

const convertToFahrenheit = function(num) {
  return Math.round(num * Math.round(5/9) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
