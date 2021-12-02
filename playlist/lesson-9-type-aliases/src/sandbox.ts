// creating a type alias
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

// const greet = (user: {name: string, uid: StringOrNum}) => {
//   console.log(`${user.name} says hello`)
// }

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
