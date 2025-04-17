const palindromes = function (string1) {
let allAlpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

let toLowerCase = string1.toLowerCase();

let splitString = toLowerCase.split("");

let filterAlpha = splitString.filter((character) => allAlpha.includes(character));

let reverseArray = filterAlpha.reverse();

let joinArray = reverseArray.join("");

let reversedString = joinArray.split('').reverse().join('');;

return joinArray === reversedString;

};



palindromes('racecar');
palindromes('racecar!');



// Do not edit below this line
module.exports = palindromes;
