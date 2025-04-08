


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


  arrays.forEach((array) => { 
  let i = args.indexOf(array) // array index starts at -1 which is the last array which is 4
  console.log(i);
  
  

  if (i < arrays.length) {
    i++; // now array is 0
    console.log(i);
    const allElements = (array) => array >= 1 && array <= 4;
    
    console.log(arrays.some(allElements));

    if (arrays.some(allElements)) {
      
      // now remove the matching elements
      const removedArrays = [...originalArrays.filter(array => array !== i)]; // what do i want to say array does not equal

    args = removedArrays;
    arrays = args;
     console.log(arrays);
     console.log(args);
     
    return removedArrays;
 
    } 
    
    console.log(args);
    return args;
  } // end of first if
  
  console.log(args);
  return args;
  }); // for loop end
 
  console.log(args);
return args;
} // end
  
  

removeFromArray();



// Do not edit below this line

//module.exports = removeFromArray;
