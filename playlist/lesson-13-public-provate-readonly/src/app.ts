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
//     return `${this.client} owes #${this.amount} for ${this.details}`;
//   }
// }

// shortcut
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes #${this.amount} for ${this.details}`;
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

// invOne.client = 'marv' can't change value of readonly

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

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
