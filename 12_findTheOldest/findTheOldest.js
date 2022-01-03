const findTheOldest = function(people) {
  const oldest = people.sort(function(a, b) {
    if (!("yearOfDeath" in a)) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (!("yearOfDeath" in b)) {
      b.yearOfDeath = new Date().getFullYear();
    }

    const firstPerson = a.yearOfDeath - a.yearOfBirth;
    const secondPerson = b.yearOfDeath - b.yearOfBirth;
    if (firstPerson > secondPerson) {
      return -1;
    }
    else {
      return 1;
    }
  });

  return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
