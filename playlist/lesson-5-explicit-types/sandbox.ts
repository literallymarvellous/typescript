// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'lugigi'
age = 30;

// isLoogedIn = 25
isLoggedIn = true;

// arrays
let ninjasArr: string[]; // should be a string array
let ninjas: string[] = []; // should be a string array & initalize with an empty array

// ninjasArr.push('doe') // raises error

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);

console.log(mixed);

let uid: string | number; // no need for parenthsis with no array
uid = 123;
console.log(uid);
uid = "Matt";
console.log(uid);

// objects
let ninjaOne: object;
ninjaOne = { name: "yot", age: 23 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "marv", age: 20, beltColour: "blue" };
