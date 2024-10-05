function findLowestPrices(inputArray: string[]): void {
    let products: { [key: string]: { price: number, town: string }} = {};

    for (const entry of inputArray) {
        let [town, product, price] = entry.split(' | ');
        let productPrice = Number(price);

        if (!products[product] || products[product].price > productPrice) {
            products[product] = { price: productPrice, town: town };
        }
    }
    for (const product in products) { 
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
const input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
    ;
findLowestPrices(input)