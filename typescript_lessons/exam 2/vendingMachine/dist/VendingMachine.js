"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const indexDrink = this.drinks.findIndex(drink => drink.name === name);
        if (indexDrink !== -1) {
            this.drinks.splice(indexDrink, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const longest = this.drinks.reduce((price1, price2) => (price2.price > price1.price ? price2 : price1));
        return longest.toString();
    }
    getCheapest() {
        const cheapest = this.drinks.reduce((price1, price2) => (price2.price < price1.price ? price2 : price1));
        return cheapest.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(drink => drink.name === name);
        return drink.toString();
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        const drinksAvailable = this.drinks.map(drink => drink.toString()).join("\n");
        return `Drinks available:\n${drinksAvailable}`;
    }
}
exports.VendingMachine = VendingMachine;
