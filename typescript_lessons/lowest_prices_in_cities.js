function findLowestPrices(inputArray) {
    var products = {};
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var entry = inputArray_1[_i];
        var _a = entry.split(' | '), town = _a[0], product = _a[1], price = _a[2];
        var productPrice = Number(price);
        if (!products[product] || products[product].price > productPrice) {
            products[product] = { price: productPrice, town: town };
        }
    }
    for (var product in products) {
        console.log("".concat(product, " -> ").concat(products[product].price, " (").concat(products[product].town, ")"));
    }
}
var input1 = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];
findLowestPrices(input);
