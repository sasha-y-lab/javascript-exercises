const sumAll = function(a, b) {

// Implement a function that takes 2 positive integers and 
// returns the sum of every integer between (and including) them

// pseudo code

//SEQUENCE
//SET inputValue to equal ...argValues; - this is now 2 separate args, a,b
// use a for loop 
// SET for loop to iterate through the input values, forward
// THEN check if the input values are positive numbers which means greater than zero
// IF true, find the missing middle input value numbers between start input value and end input value
// THEN add all input numbers together
// Then return that value
// IF not true, return ERROR

let startValue = a;
let endValue = b;

let finalSum = 0;

// now check if a, a primitive number, is an integer or b, a primitive number  is an integer and if both are non numbers.

if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
 // if the input value is less than zero, return error, if greater than zero continue
 if (startValue < 0 || endValue < 0) return "ERROR";
// if first input is smaller than second, add normally. If larger than second still add, but in order from largest to smallest
 if (startValue <= endValue) {
    
    // start looping through integers between startValue and endValue forwards
    for (let i = startValue; i <= endValue; i++) {
        finalSum += i;
    }

 } else if (startValue >= endValue) {

    // start looping throgh intergers if endValue and startvalue are switched
   // reverse the first loop in the other if statement
    for (let i = endValue; i <= startValue; i++) {
        finalSum += i;
    }

 }

} else {
    return "ERROR";
}

return finalSum;
            


};

sumAll(2, 4); // equals 9 (2 + 3 + 4)
sumAll(1, 4000); // equals 8002000
sumAll(123, 1); // equals 7626
sumAll(-10, 4); // equals ERROR

// Do not edit below this line
module.exports = sumAll;
