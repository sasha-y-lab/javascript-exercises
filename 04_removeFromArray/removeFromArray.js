


const removeFromArray = function(arrays, ...args) { // // arrays, ...remove
   
  /* 
  let index = 2;
 const originalArrays = [1, 2, 3, 4];
 const removedArrays = [...originalArrays.slice(0, index), ...originalArrays.slice(index + 1)];
  //const removedArrays = [].slice.call(remove);
  arrays = originalArrays;
  args = removedArrays;
  */
  let i = 2;
  let index = i;
  const originalArrays = [1, 2, 3, 4];
let start = 2;

   
 
  arrays = originalArrays;
  console.log(arrays);


  arrays.forEach((removedArrays) => {
     removedArrays = [...originalArrays.slice(start, index), ...originalArrays.slice(index + 1)];
     console.log(removedArrays);
     args = removedArrays;
      console.log(arrays);
      console.log(i);
      console.log(args);
 console.log(index);
      if (arrays.length [i] === args) {
        console.log(i);
        arrays.splice(i, 0, i);
        console.log(arrays);
        i--;
        console.log(i);
        console.log(originalArrays);
 console.log(args);
      }


    
  });
  console.log(originalArrays);
  console.log(args);
  
  return args;
  
 }

  
  

//removeFromArray();



// Do not edit below this line

module.exports = removeFromArray;
