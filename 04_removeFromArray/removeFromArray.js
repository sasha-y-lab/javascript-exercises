const originalArrays = [];
//const objValue = {};

const removeFromArray = function(...args) {
   
  
  const normalArray = [].slice.call(args);
  

   
//["hey", 1, 2, 3, 4, "ho"], ["hey", 1, 2, 3, 4, 7, "tacos", "1"]]
   
  //Given the collection originalArrayX, get the first item in the collection. = 1
  //Assign it to the variable arraxyX and then run the code between the curly braces {}.
  //Get the next item, and repeat (2) until you've reached the end of the collection.
  // it's code should say check if the item is equal to the number being removed.
  // if it does, then remove it. if it doesn't, do nothing. OR if it needs to be replaced, replace it.
  originalArrays.forEach((originalArray) => {
  

if (!normalArray.includes(originalArray)) { 
  
  originalArrays.push(1);
    originalArrays.push(2);
    originalArrays.push(3);
    originalArrays.push(4);
  
 
   // originalArrays.push(objValue);



 // originalArrays.pop(3);
  
}
return originalArrays;
}); 


 
 

 





}



// Do not edit below this line

module.exports = removeFromArray;
