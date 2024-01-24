"use strict";

const jonas = {
  firstName: "Utkarsh",
  lastName: "Khandelwal",
  birthYear: 1996,
  job: "sde",
  friends: ["Chitvan", "Kundu", "Phogat"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.calcAge());
console.log(jonas["age"]);
