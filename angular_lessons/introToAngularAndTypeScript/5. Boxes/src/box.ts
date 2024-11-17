class Box<T> {
    private contents: T[] = [];

    public add(element: T): void {
        this.contents.push(element);
    }

    public remove(): T | undefined {
        return this.contents.pop();
    }

    public get count(): number {
        return this.contents.length;
    }
}

// Example usage

let numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
numberBox.add(3);
console.log(numberBox.count); // Output: 3

numberBox.remove();
console.log(numberBox.count); // Output: 2

let stringBox = new Box<string>();
stringBox.add("Pesho");
stringBox.add("Gosho");
console.log(stringBox.count); // Output: 2

stringBox.remove();
console.log(stringBox.count); // Output: 1