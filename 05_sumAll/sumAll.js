const sumAll = function(...argValues) {

// Implement a function that takes 2 positive integers and 
// returns the sum of every integer between (and including) them

// pseudo code

//SEQUENCE
//SET inputValue to equal ...argValues;
// use a for loop 
// SET for loop to iterate through the input values, forward
// THEN check if the input values are positive numbers which means greater than zero
// IF true, find the missing middle input value numbers between start input value and end input value
// THEN add all input numbers together
// Then return that value
// IF not true, return ERROR

inputValue = argValues;

for (i = inputValue.length - 1; i >= 0; i++) { // loops through values forwards
console.log(i);


    if (inputValue[i] > 0) { // if the input value is greater than zero
        let positiveInterger = true; // then it is a positive interger

        if (positiveInterger) { // if it is a positive ineteger
            // identify start input value and end input values
            // find the numbers between and let it equal missingMiddleValues 
            const startValue = inputValue[0]; // starts at the index 0, the first value
            console.log(startValue);
            
            const endValue = inputValue[inputValue.length - 1]; // starts at the last value
            console.log(endValue);

            function onlyPositiveStartValues(startValue, endValue) {
                
                 minStartValue = Math.min(startValue, endValue); 
                 maxStartValue = Math.max(startValue, endValue);     
                
                let finalSum = 0;
               
                //let min = startValue
                //let max = endValue;
                if (Math.sign(minStartValue) === 1) {
                
               for (let k = minStartValue; k <= maxStartValue; k++) {
                
                finalSum += k;      
          
               console.log(finalSum);
               
            } 
      
            } else { 
                for (let k = minStartValue; k <= maxStartValue; k++) {
                
                    finalSum = "ERROR";     
              
                   console.log(finalSum);
                
               } 
            }
            return finalSum;
            } // end of function
            onlyPositiveStartValues(); 

        
        }
    

    } 

}


};

sumAll(2, 4); // equals 9 (2 + 3 + 4)
sumAll(1, 4000); // equals 8002000
sumAll(123, 1); // equals 7626
sumAll(-10, 4); // equals ERROR

// Do not edit below this line
//module.exports = sumAll;
