"use strict";
var greet;
greet = function () {
    console.log("hello, world");
};
// adding ? makes the parameter optional
// const add = (a: number, b: number, c?: number|string) => {
//   console.log(a + b);
//   console.log(c)
// };
var add = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b);
    console.log(c);
};
add(5, 5);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
