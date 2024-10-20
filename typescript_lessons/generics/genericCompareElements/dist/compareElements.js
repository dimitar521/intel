"use strict";
class CompareElements {
    constructor(elements) {
        this.elements = elements;
    }
    compare(coparator) {
        let count = 0;
        for (let element of this.elements) {
            if (element === coparator) {
                count++;
            }
        }
        return count;
    }
}
let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));
