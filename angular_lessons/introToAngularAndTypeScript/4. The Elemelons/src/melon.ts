abstract class Melon {
    constructor(public weight: number, public melonSort: string) {}

    // Abstract method to ensure each subclass provides its element type
    abstract get element(): string;

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    get element(): string {
        return "Water";
    }
}

class Firemelon extends Melon {
    get element(): string {
        return "Fire";
    }
}

class Earthmelon extends Melon {
    get element(): string {
        return "Earth";
    }
}

class Airmelon extends Melon {
    get element(): string {
        return "Air";
    }
}

class Melolemonmelon extends Watermelon {
    private elements = ["Water", "Fire", "Earth", "Air"];
    private currentElementIndex = 0;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get element(): string {
        return this.elements[this.currentElementIndex];
    }

    public morph(): void {
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