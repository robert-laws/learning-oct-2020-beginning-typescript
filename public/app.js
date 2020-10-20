import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
import ListTemplate from './classes/ListTemplate.js';
// let docOne;
// let docTwo: HasFormatter;
// docOne = new Invoice('bob', 'new hat', 23);
// docTwo = new Payment('hal', 'house cleaning', 57);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(words: string): void;
//   spend(amount: number): number;
// }
// const melvin: IsPerson = {
//   name: 'mevlin',
//   age: 34,
//   speak(text: string) {
//     console.log(text);
//   },
//   spend(money: number) {
//     return money + 100;
//   },
// };
// const greetPerson = (person: IsPerson) => {
//   console.log('hello ', person.name);
// };
// greetPerson(melvin);
const invoiceOne = new Invoice('Bob Cobb', 'pencil', 3.5);
const invoiceTwo = new Invoice('Hal Hope', 'spoon', 2.25);
console.log(invoiceOne.format());
invoiceOne.client = 'Mel Mope';
console.log(invoiceOne.format());
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
const form = document.querySelector('#new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
