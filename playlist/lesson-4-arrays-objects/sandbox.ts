//arrays
let names = ["marvel", "strange", "peter"];

names.push("mark");
// names.push(3) // cant add a number has to be a string

let numbers = [10, 20, 30];
numbers.push(25);
// numbers.push('joe') //doesn't work

// mixed
let mixed = ["ken", 4, "moe", 8];
mixed.push("ryu");
mixed.push(10); // works cause mixed was declared with strings & numbers

// objects
let ninja = {
  name: "Marvellous",
  belt: "black",
  age: 30,
};

ninja.age = 40;
// ninja.age = '30' // has to be number
// ninja.skills = ['jumoing', dancing] // can't add aditional properties

// this works, structure has & types have to be the same
ninja = {
  name: "marvel",
  age: 40,
  belt: "orange",
};
