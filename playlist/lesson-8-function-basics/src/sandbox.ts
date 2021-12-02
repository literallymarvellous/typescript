let greet: Function;

greet = () => {
  console.log("hello, world");
};

// adding ? makes the parameter optional
// const add = (a: number, b: number, c?: number|string) => {
//   console.log(a + b);
//   console.log(c)
// };

const add = (a: number, b: number, c: number | string = 20): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 5);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
