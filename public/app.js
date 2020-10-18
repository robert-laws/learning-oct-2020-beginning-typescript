"use strict";
// invoice class
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this._client = client;
        this._details = details;
        this._amount = amount;
    }
    Object.defineProperty(Invoice.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        enumerable: false,
        configurable: true
    });
    Invoice.prototype.format = function () {
        return this._client + " owes $" + this._amount + " for " + this._details + ".";
    };
    return Invoice;
}());
var invoiceOne = new Invoice('Bob Cobb', 'pencil', 3.5);
var invoiceTwo = new Invoice('Hal Hope', 'spoon', 2.25);
console.log(invoiceOne.format());
invoiceOne.client = 'Mel Mope';
console.log(invoiceOne.format());
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
var form = document.querySelector('#new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
