// Generics

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'Kal', age: 34 });

console.log(docOne.name);

// enum
enum ResourceType {
  Person,
  Shopping,
  Work,
  Gathering,
}

// generics example
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: ResourceType.Person,
  data: 'hello',
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: ResourceType.Shopping,
  data: ['bread', 'milk', 'eggs'],
};

// tuples
let arr: [string, number, boolean] = ['hello', 34, true];

let student: [string, number];
student = ['hal', 34];
