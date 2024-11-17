class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function manageTickets(ticketDescriptions, sortBy) {
    const tickets = ticketDescriptions.map(description => {
        const parts = description.trim().split('|'); // Trim whitespace and split by '|'
        // Ensure there are exactly three parts: destination, price, and status
        if (parts.length === 3) {
            const destination = parts[0];
            const price = parseFloat(parts[1]);
            const status = parts[2];
            // Check if price is a valid number after parsing
            if (!isNaN(price)) {
                return new Ticket(destination, price, status);
            }
            else {
                throw new Error(`Invalid price format in: ${description}`);
            }
        }
        else {
            throw new Error(`Invalid ticket format in: ${description}`);
        }
    });
    // Sort tickets based on the specified sorting criteria
    tickets.sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        }
        if (a[sortBy] > b[sortBy])
            return 1;
        if (a[sortBy] < b[sortBy])
            return -1;
        return 0;
    });
    return tickets;
}
// Test case
const ticketDescriptions = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
console.log(manageTickets(ticketDescriptions, 'destination'));
console.log(manageTickets(ticketDescriptions, 'status'));
