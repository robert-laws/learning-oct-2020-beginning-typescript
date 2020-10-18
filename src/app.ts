// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

character = 'Hal';

// arrays
let items: string[] = [];
let stuff: (string | number)[] = [];

// union types
let person: string | number;
person = 'Bob';
person = 4;

// objects
type StoreSale = {
  id: number;
  name: string;
};

let sale: StoreSale = {
  id: 4,
  name: 'Hat',
};

let myAge: any;
myAge = 35;
myAge = ['hello'];

// functions
let greet: Function;

greet = () => {
  console.log('hello there!');
};

const add = (a: number, b: number, c: number = 10) => {
  console.log(c);
  return a + b;
};

console.log(add(5, 7, 40));

type StrOrNum = string | number;

type User = {
  uid: StrOrNum;
  name: string;
};

const logDetails = (user: User) => {
  console.log(user.name);
};

logDetails({ uid: '5', name: 'Bob' });

// function signature
let welcome: (a: string, b: string) => void;
welcome = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
welcome('Kal', 'How are you?');

let calc: (a: number, b: number, c: string) => number;
calc = (x: number, y: number, action: string) => {
  if (action === 'add') {
    return x + y;
  } else if (action === 'subtract') {
    return x - y;
  } else {
    return -1;
  }
};
console.log(calc(5, 8, 'add'));

type Person = {
  name: string;
  age: number;
};
let logPerson: (myObj: Person) => void;
logPerson = (myPerson: { name: string; age: number }) => {
  console.log(`hello, ${myPerson.name} ---- age: ${myPerson.age.toString()}`);
};
logPerson({ name: 'Mel', age: 35 });
