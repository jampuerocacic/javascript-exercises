const convertToCelsius = function(degreesF) {
celcius = (degreesF - 32) * 5 / 9 ;
return Number(celcius.toFixed(1))
};

const convertToFahrenheit = function(degreesC) {
  farenheit = (degreesC * 9 / 5) + 32;
  return Number(farenheit.toFixed(1))
};

console.log(convertToCelsius(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
