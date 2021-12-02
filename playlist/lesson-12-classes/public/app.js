"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
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
invOne.client = "ike";
invOne.amount = 200;
console.log(invoices);
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
