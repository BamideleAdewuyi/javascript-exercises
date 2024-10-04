const convertToCelsius = function(F) {
  let C = Number((((F - 32) * (5/9))).toFixed(1));
  console.log("C: " + C)
  return C;
};

const convertToFahrenheit = function(C) {
  let F = Number(((C * (5/9)) + 32).toFixed(1));
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
