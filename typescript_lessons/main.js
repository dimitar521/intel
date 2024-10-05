function composeFoodObject(inputArray) {
    var foodObject = {};
    for (var i = 0; i < inputArray.length; i += 2) {
        var foodName = inputArray[i];
        var calories = Number(inputArray[i + 1]);
        foodObject[foodName] = calories;
    }
    return foodObject;
}
var result = composeFoodObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
console.log(result);
