function resgisterTowns(inputArray) {
    var towns = {};
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var entry = inputArray_1[_i];
        var _a = entry.split(' <-> '), town = _a[0], population = _a[1];
        var townPopulation = Number(population);
        if (towns[town]) {
            towns[town] += townPopulation;
        }
        else {
            towns[town] = townPopulation;
        }
    }
    for (var town in towns) {
        console.log("".concat(town, " : ").concat(towns[town]));
    }
}
var townsData = ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'];
resgisterTowns(townsData);
