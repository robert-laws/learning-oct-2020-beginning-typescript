"use strict";
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Kal', age: 34 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'hello',
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'eggs'],
};
