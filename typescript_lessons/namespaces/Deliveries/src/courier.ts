import FoodAndBevareges from "./foodAndBevareges";

class Courier implements FoodAndBevareges.Delivery{
    protected placesToVisit: {customerName: string, visited: boolean}[];

    constructor(placesToVisit: { customerName: string, visited: boolean}[]) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName: string, visited: boolean = false ): string {
        const customerExists = this.placesToVisit.some((place) => place.customerName === customerName);

        if (customerExists) {
            throw new Error (`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({customerName, visited});
        return `${customerName} just become your client.`;
        
    }
    visitCustomer(customerName: string): string {
        const customer = this.placesToVisit.find((place) => place.customerName === customerName);

        if (!customer) {
            throw new Error (`${customerName} is not your customer`);

        }
        customer.visited = true;
        return `${ customerName} has been marked as visited.`;
    }
    showCustomers(): string {
        return this.placesToVisit.map((place) => `${place.customerName} -> ${place.visited ? 'true' : 'false'}`).join('\n');
        
    }
}
export default Courier;