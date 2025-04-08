


const removeFromArray = function(arrays, ...args) { // // arrays, ...remove
  const originalArrays = [];
  arrays = originalArrays;
  
  console.log(arrays);

 // arrays.splice(0, 0, 1);
 // arrays.splice(1, 0, 2);
  // arrays.splice(2, 0, 3);
  //arrays.splice(3, 0, 4);

 
 
  
  const removedArrays = [];
  removedArrays.splice(0, 0, 1);
  removedArrays.splice(1, 0, 2);
   removedArrays.splice(2, 0, 3);
  removedArrays.splice(3, 0, 4);

  args = removedArrays;
  arrays = args;


  console.log(args);
  console.log(arrays);

removedArrays.splice(2, 1);
console.log(args);
console.log(arrays);

  for (i = arrays.length - 1; i >= 0; i--) { // you are looping backwards to avoid shifting. 
  const allElements = (array) => array >= 1 && array <= 4;
  if (arrays.some(allElements)) { // this is true. the array = numbers 1 - 4
    console.log(i);
    
    
    args.splice(...arrays.filter(array => array !== i++ + 2));
    
   
    console.log(arrays);
    console.log(args);
  
    
return args;
      
    } // end of if
    console.log(args);
console.log(arrays);
return args;
  } //end of for loop
  console.log(args);
  console.log(arrays);
  return args;
  
} // end
  
  

//removeFromArray();



// Do not edit below this line

module.exports = removeFromArray;
