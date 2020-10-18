"use strict";
// explicit types
var character;
var age;
var isLoggedIn;
character = 'Hal';
// arrays
var items = [];
var stuff = [];
// union types
var person;
person = 'Bob';
person = 4;
var sale = {
    id: 4,
    name: 'Hat',
};
var myAge;
myAge = 35;
myAge = ['hello'];
// functions
var greet;
greet = function () {
    console.log('hello there!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
    return a + b;
};
console.log(add(5, 7, 40));
var logDetails = function (user) {
    console.log(user.name);
};
logDetails({ uid: '5', name: 'Bob' });
// function signature
var welcome;
welcome = function (name, greeting) {
    console.log(name + " says " + greeting);
};
welcome('Kal', 'How are you?');
var calc;
calc = function (x, y, action) {
    if (action === 'add') {
        return x + y;
    }
    else if (action === 'subtract') {
        return x - y;
    }
    else {
        return -1;
    }
};
console.log(calc(5, 8, 'add'));
var logPerson;
logPerson = function (myPerson) {
    console.log("hello, " + myPerson.name + " ---- age: " + myPerson.age.toString());
};
logPerson({ name: 'Mel', age: 35 });
