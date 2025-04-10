const leapYears = function(year) {
// Create a function that determines whether or not a given year is a leap year.
// Leap years are determined by the following rules:
// Leap years are years divisible by four with no remainder. However, 
// years divisible by 100 are not leap years unless 
// they are divisible by 400

let result;

// if year is divisible by 4 and has no remainder
// divisible by 100 are century years


if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    result = true;
} else {
    result = false;
}
 return result;
};

leapYears(1996); // true
leapYears(1997); // false

// Do not edit below this line
module.exports = leapYears;
