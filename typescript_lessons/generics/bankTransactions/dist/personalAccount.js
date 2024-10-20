"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAccount_1 = require("./createAccount");
class PersonalAccount extends createAccount_1.CreateAccount {
    constructor(bankName, bankID, ownerName) {
        super(bankName, bankID);
        this.money = 0;
        this.recentTransactions = {};
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money < amount) {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
        this.money -= amount;
        if (this.recentTransactions[expenseType]) {
            this.recentTransactions[expenseType] += amount;
        }
        else {
            this.recentTransactions[expenseType] = amount;
        }
    }
    showDetails() {
        const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce((a, b) => a + b, 0);
        return `Bank Name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money.toFixed(2)}\nMoney spent: ${totalMoneySpentOnExpenses.toFixed(2)}`;
    }
}
let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');
account2.deposit(10000);
account2.deposit(7000);
account2.expense(1200, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
