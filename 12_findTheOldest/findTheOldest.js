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
 
 /* const getAge = function (birth, death) {
        
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  


 // sort the array in ascending order by value does same as map
 // function compareAges(a, b) {
    
  //  return a - b;
 // }

 

const findTheOldest = function(people) {

    
   // const peopleAges = people.map(person => getAge(person));
   const peopleAges = people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    oldestAge < currentAge ? currentPerson : oldest;

   });

        console.log(peopleAges);
     
   // const sortAges = peopleAges.sort(compareAges); // sorts ages but does the same thin as get age map
   //const sortAges = peopleAges.sort();
   //  console.log(sortAges);

      // get the highest number

   // const oldestPerson = sortAges.map((people) => {
//return { people[1] };

   // });
    //  console.log(oldestPerson);
     // console.log(oldestPerson.name); // undefined
     // console.log(oldestPerson.person); // undefined
     // console.log(oldestPerson.person.name); // cannot read
      // console.log(oldestPerson.people); //undefined
     // console.log(oldestPerson.people.name); undefined name
    //  console.log((oldestPerson).name); //undefined

      //const finalOldest = oldestPerson.person.name;

    // console.log(finalOldest);
    return peopleAges;

};
*/

// Do not edit below this line
module.exports = findTheOldest;
