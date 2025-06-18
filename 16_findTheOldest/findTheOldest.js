function getAge(person) {
  if(!person.yearOfDeath) {
    person.yearOfDeath = new Date().getFullYear()
  }
  return person.yearOfDeath - person.yearOfBirth;
}
const findTheOldest = function(array) {
  const peopleSorted = array.sort((personA, personB) => getAge(personB) - getAge(personA))
  return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
