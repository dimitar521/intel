function createPersonObject(firstName, lastName, age) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return person;
}
var personObject = createPersonObject("Peter", "Pan", "20");
var personObject1 = createPersonObject("George", "Smith", "18");
console.log(personObject, personObject1);
