import { Invoice } from "./classes/invoice.js";
const me = {
    name: "shaun",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
let someone;
const greetPerson = (person) => {
    console.log("hello " + person.name);
};
greetPerson(me);
console.log(me);
const invOne = new Invoice("mario", "freelance project", 250);
const invTwo = new Invoice("joe", "freelance project", 450);
console.log(invOne);
console.log(invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
