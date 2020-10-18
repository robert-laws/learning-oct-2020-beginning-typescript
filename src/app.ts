import Invoice from './classes/Invoice.js';

const invoiceOne = new Invoice('Bob Cobb', 'pencil', 3.5);
const invoiceTwo = new Invoice('Hal Hope', 'spoon', 2.25);
console.log(invoiceOne.format());

invoiceOne.client = 'Mel Mope';
console.log(invoiceOne.format());

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

const form = <HTMLFontElement>document.querySelector('#new-item-form');

const type = <HTMLSelectElement>document.querySelector('#type');
const toFrom = <HTMLInputElement>document.querySelector('#toFrom');
const details = <HTMLInputElement>document.querySelector('#details');
const amount = <HTMLInputElement>document.querySelector('#amount');

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
