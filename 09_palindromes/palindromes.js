const palindromes = function (string1) {


let splitString = string1.split("/^[a-z]+$/i");

let reverseArray = splitString.reverse();

let joinArray = reverseArray.join("");

return string1 === joinArray;


};

palindromes('racecar');
palindromes('racecar!');


// Do not edit below this line
module.exports = palindromes;
