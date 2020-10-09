var names = ['bob', 'hal', 'jim'];
var numbers = [4, 6, 8, 10];
var mixed = ['bill', 6, true, 'hal', 11];
var item = {
    name: 'brush',
    size: 35
};
item = {
    name: 'bill',
    size: 5
};
// explicit types
var firstName;
var price;
var isLoggedIn;
price = 43;
isLoggedIn: false;
firstName = 'Hal';
// arrays
var items;
items.push('pencil');
items = ['brush', 'stuff'];
// union types
var stuff = [];
stuff.push('hello');
stuff.push(35);
var uid;
uid = 236272;
uid = '32425';
// objects
var playerOne;
playerOne = { name: 'bob', age: 34 };
var playerTwo;
playerTwo = {
    name: 'Kal',
    age: 34,
    isManager: true
};
var locations;
locations.push({ name: 'Chicago' });
// dynamic - any - type
var place = 25;
place = 'home';
var randomItems = [];
randomItems.push(5);
randomItems.push('hello');
randomItems.push(true);
var people;
people = { name: 5, age: '5' };
