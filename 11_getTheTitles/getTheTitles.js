const getTheTitles = function(array) {

  
   // return array.filter(books => books.title); // returns entire array

   console.log(array.map(books => books.title));
   return array.map(books => books.title); // gets just once instance of all objects for one key
 


};



// Do not edit below this line
module.exports = getTheTitles;
