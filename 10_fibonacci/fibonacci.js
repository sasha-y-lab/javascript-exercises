const fibonacci = function(n) {

    
    // needs to be an array

    let num1;
    let num2;

    num1 = num2 = 1;

    

    for (let f = 1; f < n; f++) {
        let fibNum = ((num1 - 1) + (num2 - 2)) + n;
console.log(n);
console.log(f);
console.log(fibNum);
 return fibNum;

    }

  // fibonnaci = (num1 - 1) + (num2 - 2) and is is valid for num > 2
  // also for this, num1 = num2 = 1
  // fibonnaci for this starts at 1.



};

// Do not edit below this line
module.exports = fibonacci;
