


const removeFromArray = function(arrays, ...args) { // // arrays, ...remove
  const originalArrays = [];
  arrays = originalArrays;
  
  console.log(arrays);

  arrays.splice(0, 0, 1);
  arrays.splice(1, 0, 2);
   arrays.splice(2, 0, 3);
  arrays.splice(3, 0, 4);
  //arrays.splice(4, 0, "hey");
  //arrays.splice(5, 0, "ho");
  console.log(arrays);
 
  
  

  for (i = arrays.length - 1; i >= 0; i--) { // you are looping backwards to avoid shifting. 
  
    const removedArrays = [...originalArrays.filter(array => array !== i)];  // remove 1 value at index #3
    args = removedArrays;
    arrays = args;
        
  console.log(arrays);
  console.log(args);

    console.log(i);
    const allElements = (array) => array >= 1 && array <= 4;
    
    console.log(arrays.some(allElements)); // this is true. the array = numbers 1 - 4

    if (arrays.some(allElements)) {
      // if array = numbers 1 - 4
      // remove the matching elements, one by one
      args.splice(...arrays.filter(array => array !== i));
          
/* 
     if (JSON.stringify(arrays) === JSON.stringify(removedArrays)) {
      args.splice(...arrays.filter(array => array !== i));
     // args.splice(...arrays.filter(array => array !== i++));
      //console.log(args.splice(...removedArrays.filter(array => array !== i++))); do not uncomment - it repeats the action
      console.log(arrays);
      console.log(args);
    return args;
     } */

     console.log(arrays);
     console.log(args);

    return args;
      
    } 
    
    
  
    
    console.log(args);
    console.log(arrays);
    return args;
  } // end of first if
  

 
  console.log(args);
  console.log(arrays);
return args;
} // end
  
  

//removeFromArray();



// Do not edit below this line

module.exports = removeFromArray;
