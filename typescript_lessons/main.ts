function composeFoodObject(inputArray: string[]): Record<string, number> {
    let foodObject: Record<string, number> = {};
    for (let i = 0; i < inputArray.length; i +=2) {
        let foodName: string = inputArray[i];
        let calories: number = Number(inputArray[i + 1]);
        foodObject[foodName] = calories;
    }

return foodObject;
}
const result = composeFoodObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
console.log(result);
