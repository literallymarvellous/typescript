"use strict";
// classes
// class Invoice {
//   readonly client: string; // read outside & inside but change value only inside class
//   private details: string; // read and change only inside the class
//   public amount: number; // default
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes #${this.amount} for ${details}`;
//   }
// }
// shortcut
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes #" + this.amount + " for " + details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "freelance project", 250);
var invTwo = new Invoice("joe", "freelance project", 450);
console.log(invOne);
console.log(invTwo);
var invoices = [];
// invoices.push('ff')
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'marv' can't change value of readonly
invoices.forEach(function (inv) { return console.log(inv.client, inv.amount, inv.format()); });
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
