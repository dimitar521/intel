"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const customerExists = this.placesToVisit.some((place) => place.customerName === customerName);
        if (customerExists) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just become your client.`;
    }
    visitCustomer(customerName) {
        const customer = this.placesToVisit.find((place) => place.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer`);
        }
        customer.visited = true;
        return `${customerName} has been marked as visited.`;
    }
    showCustomers() {
        return this.placesToVisit.map((place) => `${place.customerName} -> ${place.visited ? 'true' : 'false'}`).join('\n');
    }
}
exports.default = Courier;
