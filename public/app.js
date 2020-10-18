import Invoice from './classes/Invoice.js';
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
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
