//Write two functions that convert temperatures from Fahrenheit 
// to Celsius, and vice versa:

const convertToCelsius = function(degreeNumberFahr) {

// what is the calculation to calculate farenheit to celcius
// (x − 32) × ⁠(5/9) = degree C
// round answer to 1 decimal point

let celsius = (degreeNumberFahr - 32) * (5 / 9);

let celsiusRounded = (Math.round(celsius * 10) / 10);
return celsiusRounded;


};

const convertToFahrenheit = function(degreeNumberCel) {
// what is the calculation to calculate celcius to farenheit
// (x) x (9/5) + 32 = degree f
// round answer to 1 decimal point

let fahrenheit = (degreeNumberCel * (9 / 5) + 32);
let fahrenheitRound = (Math.round(fahrenheit * 10) / 10);
return fahrenheitRound;

};

convertToCelsius(32); // returns 0
convertToFahrenheit(0); // returns 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
