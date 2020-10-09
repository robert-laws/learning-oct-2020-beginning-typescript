// type = function
let greet = () => {
  console.log('hello, world');
};

// declaring as a function
let welcome: Function;

welcome = () => {
  console.log('welcome...');
};

const add = (a: number, b: number, c: number = 10): void => {
  console.log(a + b + c);
};

add(34, 64, 33);

// declare function parameter types and return type
const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(34, 12);
