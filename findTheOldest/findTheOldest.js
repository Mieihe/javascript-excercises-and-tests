let findTheOldest = function(people) {
  var d = new Date();
  var n = d.getFullYear();
  function createAge(element) {
    if (element.yearOfDeath > 0) {
    element.age = element.yearOfDeath - element.yearOfBirth;
    } else {
      element.age = n - element.yearOfBirth;
    } 
  }
  people.forEach(createAge);
  people.sort(function (a, b) {
    return b.age - a.age;
  });
  console.log(people[0]);
  return people[0];
}

module.exports = findTheOldest
