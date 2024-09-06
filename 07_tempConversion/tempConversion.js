const convertToCelsius = function(degrees) {
  return roundToOneDecimal((degrees - 32) * (5/9));
};

const convertToFahrenheit = function(degrees) {
  return roundToOneDecimal(degrees * (9/5) + 32);
};

function roundToOneDecimal(number) {
  return Math.round(number *10 )/10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
