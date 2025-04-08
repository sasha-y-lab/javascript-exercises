


const removeFromArray = function(arrays, ...removedArgsValues) { 
  
const startingArray = arrays;
let inputValue = removedArgsValues;
const newArray = [];

for (j = startingArray.length - 1; j >= 0; j--) { // loops the array backwards starting from the last element as to not shift the array when removing elements

let shouldKeep = true; // keep an array element

  for (i = inputValue.length - 1; i >=0; i--) { // loops the arguments backwards starting from the last value to not shift it when removing

    if (startingArray[j] === inputValue[i]) { // checks if the array element is equal to arg value

      shouldKeep = false; // do not keep an array element
      break;
    }

  }

  if (shouldKeep) { // if shouldKeep is true

      newArray.unshift(startingArray[j]); // pushing the new array element from the front of the array not back
  }

}

  return newArray; // this keeps the value of the newArray, and updates through each iteration
} // end
  
  removeFromArray([1, 2, 3, 4], 3); //[1, 2, 4]

  removeFromArray([1, 2, 3, 4], 3, 2); // [1, 4]

  removeFromArray([1, 2, 2, 3], 2); // [1, 3]

  removeFromArray([1, 2, 3, 4], 7, "tacos"); // [1, 2, 3, 4]

  removeFromArray([1, 2, 3, 4], 7, 2); // [1, 3, 4]

  removeFromArray([1, 2, 3, 4], 1, 2, 3, 4) // []

  removeFromArray(["hey", 2, 3, "ho"], "hey", 3); // [2, "ho"]

  removeFromArray([1, 2, 3], "1", 3); // [1, 2]



// Do not edit below this line

module.exports = removeFromArray;
