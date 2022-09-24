// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it
// has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of
// incomes and its description and expenses is a set of incomes and its description.

let personAccount = {
  firstName: "Jatin",
  lastName: "Agrahari",
  incomes: [
    { description: "Salary", amount: 50000 },
    { description: "social", amount: 10000 },
    { description: "extras", amount: 10000 },
  ],
  expenses: [
    { description: "rent", amount: 15000 },
    { description: "Grocery", amount: 10000 },
    { description: "extras", amount: 15000 },
  ],

  totalIncome: function () {
    let sum = 0;
    for (const e of this.incomes) {
      sum = sum + e.amount;
    }
    return sum;
  },

  totalExpenses: function () {
    let sum = 0;
    for (const e of this.expenses) {
      sum = sum + e.amount;
    }
    return sum;
  },

  accountInfo: function () {
    return `
    Person Full name is : ${this.firstName + this.lastName}
    person's Total Income is : ${this.totalIncome()}
    person's Total Expense is : ${this.totalExpenses()}`;
  },

  addIncome: function () {
    let addIncome = { description: "Rented property", amount: 10000 };
    this.incomes.push(addIncome);
  },

  addExpense: function () {
    let addExpense = { description: "Fashion", amount: 12000 };
    this.expenses.push(addExpense);
  },

  accountBalance: function () {
    return `Total Account balance is : ${
      this.totalIncome() - this.totalExpenses()
    }`;
  },
};
// console.log(personAccount);
personAccount.addIncome();
personAccount.addExpense();
console.log(personAccount.incomes);
console.log(personAccount.expenses);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());
