import { Drink } from "./Drink";
export class VendingMachine{
    private buttonCapacity: number;
    private drinks: Drink[];

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
  
    
    addDrink(drink: Drink): void {
        if(this.drinks.length < this.buttonCapacity){
            this.drinks.push(drink);
        }

    }

    removeDrink(name: string): boolean{
        const indexDrink = this.drinks.findIndex(drink => drink.name === name);
        if (indexDrink !== -1){
            this.drinks.splice(indexDrink, 1);
            return true;

        }
        return false;

    }
    getLongest(): string{
        const longest = this.drinks.reduce((price1, price2) => (price2.price > price1.price ? price2:price1));
        return longest.toString();
    }
    getCheapest(): string{
        const cheapest = this.drinks.reduce((price1, price2) => (price2.price < price1.price ? price2:price1));
        return cheapest.toString();
    }
    buyDrink(name: string): string{
        const drink = this.drinks.find(drink => drink.name ===name);
        return drink.toString();
    }
    get getCount(): number {
        return this.drinks.length;
    }
    report(): string{
        const drinksAvailable = this.drinks.map(drink => drink.toString()).join("\n");
        return `Drinks available:\n${drinksAvailable}`;
    }
}