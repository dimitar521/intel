function createPersonObject(firstName: string, lastName: string, age: string): {firstName: string, lastName: string, age:string } {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return person;
}
const personObject = createPersonObject("Peter", "Pan","20");
const personObject1 = createPersonObject("George", "Smith","18")
console.log(personObject,personObject1);
