interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}
class CarDealership implements Dealership<string>, Actions<string> {
    public dealershipName: string;
    public soldCars: number;
    public modelsSold: {[key: string]: string};

    constructor(dealershipName: string) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }
    sellCar(dealerID: string, model: string): void {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
        
    }
    showDetails(): string {
        let details = `${this.dealershipName}:\n`;
        for (const [dealerID, model] of Object.entries(this.modelsSold)) {
            details += `${dealerID} sold ${model}\n`;

        }
        return details.trim();
    }


}
let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());
