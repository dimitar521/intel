"use strict";
class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}
// Example usage
let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display(); // Output: key = 1, value = Steve
