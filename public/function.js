"use strict";
// type = function
var greet = function () {
    console.log('hello, world');
};
// declaring as a function
var welcome;
welcome = function () {
    console.log('welcome...');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b + c);
};
add(34, 64, 33);
// declare function parameter types and return type
var minus = function (a, b) {
    return a - b;
};
var result = minus(34, 12);
