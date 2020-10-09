let names = ['bob', 'hal', 'jim'];

let numbers = [4, 6, 8, 10];

let mixed = ['bill', 6, true, 'hal', 11];

let item = {
  name: 'brush',
  size: 35,
};

item = {
  name: 'bill',
  size: 5,
};

// explicit types
let firstName: string;
let price: number;
let isLoggedIn: boolean;

price = 43;
isLoggedIn: false;
firstName = 'Hal';

// arrays
let items: string[] = [];
items.push('pencil')
items = ['brush', 'stuff'];

// union types
let stuff: (string|number)[] = [];
stuff.push('hello')
stuff.push(35)

let uid: string|number;
uid = 236272;
uid = '32425'

// objects
let playerOne: object;
playerOne = { name: 'bob', age: 34 }

let playerTwo: {
  name: string,
  age: number,
  isManager: boolean
}

playerTwo = {
  name: 'Kal',
  age: 34,
  isManager: true
}

let locations: (object)[] = [];
locations.push({ name: 'Chicago'})

// dynamic - any - type
let place: any = 25;
place = 'home';

let randomItems: any[] = [];
randomItems.push(5);
randomItems.push('hello')
randomItems.push(true)

let people: { name: any, age: any }
people = { name: 5, age: '5' }