function findLowestPrice( input: string[]): void {
    const productData: Map<string, { price: number, town: string}> = new Map();

    for (const element of input) {
        const [town, product, priceStr] = element.split(" | ");
        const price = parseFloat(priceStr);

        if (!productData.has(product) || price < productData.get(product)!.price) {
            productData.set(product, {price: price, town: town});
        }
    }
    for (const [product, data] of productData) {
        console.log(`${product} -> ${data.price} (${data.town})`);
        
    }
}
const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];
    findLowestPrice(input);