// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes #${this.amount} for ${details}`;
  }
}

const invOne = new Invoice("mario", "freelance project", 250);
const invTwo = new Invoice("joe", "freelance project", 450);

console.log(invOne);
console.log(invTwo);

let invoices: Invoice[] = [];
// invoices.push('ff')
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "ike";
invOne.amount = 200;

console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
