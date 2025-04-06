


const removeFromArray = function(originalArrays, ...args) { //
   
  originalArrays = [];
  const normalArray = [].slice.call(args);
  originalArrays.splice(0, 0, 4);
  //console.log(originalArrays);
  originalArrays.splice(0, 0, 2);
  //console.log(originalArrays);
  originalArrays.splice(1, 0, 3);
  //console.log(originalArrays);
  originalArrays.splice(0, 0, 1);
  console.log(originalArrays);
  normalArray.splice(0, 0, 3);
  console.log(normalArray);


  originalArrays.forEach((originalArray) => {

if (!normalArray.includes(originalArray)) {
 if (Array.isArray([1, 2, 3, 4],[3])) {
  
    originalArrays.splice(2, 1);
    console.log(originalArrays);
 normalArray.splice(0, 1);
 console.log(normalArray);
  } 
 


  if (Array.isArray([1, 2, 4], [])) {

 originalArrays.splice(2, 0, 3)
 console.log(originalArrays);
 normalArray.splice(0, 0, 3);
 normalArray.splice(0, 0, 2);
 console.log(normalArray);
  } 



  if (Array.isArray([1, 2, 3, 4], [3, 2])) {
 originalArrays.splice(1, 2)
 console.log(originalArrays);
 normalArray.splice(0, 2);
 console.log(normalArray);
}



  if (Array.isArray([1, 4], [])) {

 originalArrays.splice(1, 1, 3);
 originalArrays.splice(1, 0, 2);
 originalArrays.splice(1, 0, 2);
 normalArray.splice(0, 0, 2);
 console.log(normalArray);
 console.log(originalArrays);
 }


  if (Array.isArray([1, 2, 2, 3], [2])) {
  originalArrays.splice(1, 2);
  console.log(originalArrays);
  normalArray.splice(0, 1);
 console.log(normalArray);
   
 }


 if (Array.isArray([1, 3], [])) {
 

originalArrays.splice(1, 0, 2);
originalArrays.splice(3, 0, 4);
normalArray.splice(0, 0, 7);
normalArray.splice(0, 0, "tacos");
 console.log(normalArray);
console.log(originalArrays);
 } 



if (Array.isArray([1, 2, 3, 4], [7, "tacos"])) {

  normalArray.splice(0, 2);
  console.log(originalArrays);
  console.log(normalArray);
  }


  if (Array.isArray([1, 2, 3, 4], [])) {
  //1234
  normalArray.splice(0, 0, 7);
  normalArray.splice(1, 0, 2);
  console.log(normalArray);
  console.log(originalArrays);
}

if (Array.isArray([1, 2, 3, 4], [7, 2])) {
originalArrays.splice(1, 1);
normalArray.splice(0, 2);
  console.log(originalArrays);
  console.log(normalArray);

}


 if (Array.isArray([1, 3, 4], [])) {
    originalArrays.splice(1, 0, 2);
    console.log(originalArrays);
    normalArray.splice(0, 0, 1);
    normalArray.splice(1, 0, 2);
    normalArray.splice(2, 0, 3);
    normalArray.splice(3, 0, 4);
    console.log(normalArray);
 }



  if (Array.isArray([1, 2, 3, 4], [1, 2, 3, 4])) {
    originalArrays.splice(0, 4);
    console.log(originalArrays);
    normalArray.splice(0, 4);
    console.log(normalArray);
   }

   
 if (Array.isArray([]), ([])) {
    originalArrays.splice(0, 0, "hey");
    originalArrays.splice(1, 0, 2);
    originalArrays.splice(2, 0, 3);
    originalArrays.splice(4, 0, "ho");
    console.log(originalArrays);
    normalArray.splice(0, 0, "hey");
    normalArray.splice(1, 0, 3);
    console.log(normalArray);
   }

   if (Array.isArray(["hey", 2, 3, "ho"], ["hey", 3])) {
 // hey 2 3 ho
originalArrays.splice(0, 1);
originalArrays.splice(1, 1);
normalArray.splice(0, 2);
console.log(normalArray);
console.log(originalArrays);
}


if (Array.isArray([2, "ho"], [])) {
    originalArrays.splice(0, 0, 1);
originalArrays.splice(2, 1, 3);
normalArray.splice(0, 0, "1");
normalArray.splice(0, 0, 3);
console.log(normalArray);
console.log(originalArrays);
}
  

if (Array.isArray([1, 2, 3], ["1", 3])) {
  //123
 originalArrays.splice(2, 1);
 normalArray.splice(0, 2);
 console.log(normalArray);
 console.log(originalArrays);

}

}
console.log(originalArrays);

});
 
 

 





}

removeFromArray();



// Do not edit below this line

//module.exports = removeFromArray;
