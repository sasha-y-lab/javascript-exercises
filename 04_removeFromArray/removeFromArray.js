const removeFromArray = function() {
   
   let counter = 1;
   
   let arrayX = ["hey", 1, 2, 3, 4, "ho"];  
   let value = ["hey", 1, 2, 3, 4, 7, "tacos", "1"];


           let combinedArrays = arrayX.concat(value); // [hey', 1, 2, 3, 4, 'ho', 'hey', 1, 2, 3, 4, 7, 'tacos', '1']

           console.log(combinedArrays);

           let arrayWithoutX = combinedArrays
           
           
           /*
           
           .filter (function (numStringX) {
           

           while (counter <= 8) {
            counter++;


            if (counter === 1) {
                return console.log(numStringX !== 3);

            } else if (counter === 2) {
                return console.log(numStringX !== 3 && numStringX !== 2);

            } else if (counter === 3) {
                return numStringX !== 2;

           } else if (counter === 4) {
             return numStringX !== 7 && numStringX !== "tacos";
           }
           else if (counter === 5) {
            return numStringX !== 2 && numStringX !== 7; 

           } else if (counter === 6) {
            return numStringX !== 1 && numStringX !== 2 && numStringX !== 3 && numStringX !== 4; 

           } else if (counter === 7) {
            return numStringX !== 3 && numStringX !== "hey"; 

           } else if (counter === 8) {
            return numStringX !== "1" && numStringX !== 3; 

           } else {
            return;
           }
           
      } 
    }) 
    
    return arrayWithoutX; */
}; 



// Do not edit below this line

 module.exports = removeFromArray;
