const convertToCelsius = function(F) {
  let temperature = Number(((F - 32) * 1.8).toFixed(1));
  return temperature;
};

const convertToFahrenheit = function(C) {
  let temperature = Number(((C + 32) * 1.8).toFixed(1));
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
