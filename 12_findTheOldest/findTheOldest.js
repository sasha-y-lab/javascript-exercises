/*
const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  }; 
  */
 
  // i dont get why birth and death are read and yearOfBirth and yearOfDeath aren't read
 const getAge = function (birth, death) {
        
//birth = people.yearOfBirth; undefined is people
//death = people.yearOfDeath; undefined is people

    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  


 
const findTheOldest = function(people) {

    
   let peopleAges = people.reduce((oldest, currentPerson) => { // oldest is the first element which is Carly
    console.log(oldest); //yes this is carly
    
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
   
   console.log(oldestAge); // carly's age

   if (oldestAge < currentAge) {
 return currentPerson;

   } else {
    return oldest;
   }

   });

        console.log(peopleAges);
     
   
    return peopleAges;

};


// Do not edit below this line
module.exports = findTheOldest;
