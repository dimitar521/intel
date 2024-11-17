"use strict";
class Box {
    constructor() {
        this.contents = [];
    }
    add(element) {
        this.contents.push(element);
    }
    remove() {
        return this.contents.pop();
    }
    get count() {
        return this.contents.length;
    }
}
// Example usage
let numberBox = new Box();
numberBox.add(1);
numberBox.add(2);
numberBox.add(3);
console.log(numberBox.count); // Output: 3
numberBox.remove();
console.log(numberBox.count); // Output: 2
let stringBox = new Box();
stringBox.add("Pesho");
stringBox.add("Gosho");
console.log(stringBox.count); // Output: 2
stringBox.remove();
console.log(stringBox.count); // Output: 1
