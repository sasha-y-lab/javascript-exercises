const palindromes = function (string1) {

let lowerCaseString = string1.toLowerCase();

let splitString = lowerCaseString.split("");

let reverseArray = splitString.reverse();

let joinArray = reverseArray.join("");

return string1 === joinArray;


};

palindromes('racecar');


// Do not edit below this line
module.exports = palindromes;
