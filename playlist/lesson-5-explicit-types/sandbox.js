"use strict";
// explicit types
var character;
var age;
var isLoggedIn;
// age = 'lugigi'
age = 30;
// isLoogedIn = 25
isLoggedIn = true;
// arrays
var ninjasArr; // should be a string array
var ninjas = []; // should be a string array & initalize with an empty array
// ninjasArr.push('doe') // raises error
// union types
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);
console.log(mixed);
var uid; // no need for parenthsis with no array
uid = 123;
console.log(uid);
uid = "Matt";
console.log(uid);
// objects
var ninjaOne;
ninjaOne = { name: "yot", age: 23 };
var ninjaTwo;
ninjaTwo = { name: "marv", age: 20, beltColour: "blue" };
