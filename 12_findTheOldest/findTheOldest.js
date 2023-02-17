const findTheOldest = function(people) {
  let oldest = { age: 0 };

  people.forEach(person => {
    let currentAge = 0;
    if (Object.hasOwn(person, "yearOfDeath")) {
      currentAge = person.yearOfDeath - person.yearOfBirth;
    } else {
      currentAge = (new Date()).getFullYear() - person.yearOfBirth;
    }

    if (currentAge > oldest.age) {
      oldest = person;
      oldest.age = currentAge;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
