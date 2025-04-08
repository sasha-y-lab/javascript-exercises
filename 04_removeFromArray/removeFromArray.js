


const removeFromArray = function(arrays, ...args) { // // arrays, ...remove
  const originalArrays = [];
  arrays = originalArrays;
  
  console.log(arrays);

  arrays.splice(0, 0, 1);
  arrays.splice(1, 0, 2);
   arrays.splice(2, 0, 3);
  arrays.splice(3, 0, 4);
  console.log(arrays);

  arrays.forEach((array) => {
    let index = args.indexOf(array);
    

  if (index === -1) {
    let indexInside = 2;
    const removedArrays = [...originalArrays.slice(0, indexInside), ...originalArrays.slice(indexInside + 1)];
    //let removedArrays;
    // args = removedArrays;
    args = removedArrays;
    arrays = args;
     console.log(arrays);
     console.log(args);
     console.log(args.indexOf(array));

    if (indexInside === 2) {
      args = [...originalArrays.slice(0, indexInside - 1), ...originalArrays.slice(indexInside + 1)]; // ignore this removes 2 & 3
      console.log(args);
      console.log(args.indexOf(array));
      return removedArrays
    }
    return removedArrays



} // first if

console.log(args);
  }); //end of for each 
console.log(args);
  //return removedArrays;
}
  
  

//removeFromArray();



// Do not edit below this line

module.exports = removeFromArray;
