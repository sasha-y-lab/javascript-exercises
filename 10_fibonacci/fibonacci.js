const fibonacci = function(n) {

   // Convert input to number in case it's a string (like "4")
   n = Number(n);

   // Edge cases
   //if (n === 0) return 0;
   //if (n === 1) return 1;

   if (n === 1 || n === 2) return 1; // these are defined already, no need for calc

   let num1;
   let num2;
   num1 = num2 = 1;

   let fibNum = 0;

   // Start from i = 3 because first two positions are already known (1, 1)
   // starting from 3rd position forward, as position 1 is num1, position 2 is num2
   for (let i = 3; i <= n; i++) {
       fibNum = num1 + num2;
       num1 = num2;
       num2 = fibNum;

       console.log(`i: ${i}, fibNum: ${fibNum}`);
   }
console.log(num2);
   return num2;

  // fibonnaci = (num1 - 1) + (num2 - 2) and is is valid for num > 2
  // also for this, num1 = num2 = 1
  // fibonnaci for this starts at 1.
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,



};

// Do not edit below this line
module.exports = fibonacci;
