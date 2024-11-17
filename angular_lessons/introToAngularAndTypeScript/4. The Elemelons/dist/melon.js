class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Watermelon extends Melon {
    get element() {
        return "Water";
    }
}
class Firemelon extends Melon {
    get element() {
        return "Fire";
    }
}
class Earthmelon extends Melon {
    get element() {
        return "Earth";
    }
}
class Airmelon extends Melon {
    get element() {
        return "Air";
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elements = ["Water", "Fire", "Earth", "Air"];
        this.currentElementIndex = 0;
    }
    get element() {
        return this.elements[this.currentElementIndex];
    }
    morph() {
        // Cycle through the elements
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
    }
}
// Example usage
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Output:
// Element: Water
// Sort: Kingsize
// Element Index: 100
let melolemonmelon = new Melolemonmelon(15, "Gigantic");
console.log(melolemonmelon.toString());
// Initial output (Water element):
// Element: Water
// Sort: Gigantic
// Element Index: 120
// Morph through elements
melolemonmelon.morph();
console.log(melolemonmelon.toString());
// After morphing (Fire element):
// Element: Fire
// Sort: Gigantic
// Element Index: 120
melolemonmelon.morph();
console.log(melolemonmelon.toString());
// After morphing (Earth element):
// Element: Earth
// Sort: Gigantic
// Element Index: 120
