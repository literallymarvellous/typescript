"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet("Marvel", "hi");
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(10, 5, "add"));
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
var marvel = { name: "ike", age: 23 };
logDetails({ name: "marv", age: 23 });
