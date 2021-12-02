// let age: any;
let age: any = 25;

console.log(age);
age = true;
console.log(age);
age = 20;
console.log(age);
age = "fos";
console.log(age);

// array
let mixed: any[] = [];

mixed.push(5);
mixed.push("ma");
mixed.push(false);
console.log(mixed);

// object
let ninja: { name: any; age: any };

ninja = { name: "yo", age: 25 };
console.log(ninja);
ninja = { name: 25, age: "bow" };
console.log(ninja);
