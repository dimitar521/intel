class KeyValuePair<T, U> {
    private key: T | undefined;
    private value: U | undefined;

    public setKeyValue(key: T, value: U): void {
        this.key = key;
        this.value = value;
    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}

// Example usage
let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display(); // Output: key = 1, value = Steve