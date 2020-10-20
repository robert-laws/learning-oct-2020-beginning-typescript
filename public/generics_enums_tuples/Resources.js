"use strict";
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Kal', age: 34 });
console.log(docOne.name);
// enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Person"] = 0] = "Person";
    ResourceType[ResourceType["Shopping"] = 1] = "Shopping";
    ResourceType[ResourceType["Work"] = 2] = "Work";
    ResourceType[ResourceType["Gathering"] = 3] = "Gathering";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.Person,
    data: 'hello',
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.Shopping,
    data: ['bread', 'milk', 'eggs'],
};
// tuples
let arr = ['hello', 34, true];
let student;
student = ['hal', 34];
