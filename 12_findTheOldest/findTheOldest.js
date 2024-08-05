const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(people) {
  let oldestPerson = people[0];
  let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);

  people.forEach(person => {
    const currentAge = getAge (person.yearOfBirth, person.yearOfDeath)
    if (currentAge > oldestAge) {
      oldestPerson = person;
      oldestAge = currentAge;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
