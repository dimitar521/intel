function parseTableToObjects(inputArray) {
    var towns = [];
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var entry = inputArray_1[_i];
        var _a = entry.split(' | '), town = _a[0], latitude = _a[1], longtitude = _a[2];
        var townInfo = {
            Town: town,
            Latitude: parseFloat(Number(latitude).toFixed(2)),
            Longtitude: parseFloat(Number(longtitude).toFixed(2))
        };
        towns.push(townInfo);
    }
    for (var _b = 0, towns_1 = towns; _b < towns_1.length; _b++) {
        var town = towns_1[_b];
        console.log(town);
    }
    return towns;
}
var tableData = ['Plovdiv | 136.45 | 812.575'];
parseTableToObjects(tableData);
