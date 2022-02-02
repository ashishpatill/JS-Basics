class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age; 
    }

    static speak(person) {
        return `Hello my name is ${person.name} and age is ${person.age}.`
    }
}

const p1 = new Person("Ashish", 30);
document.getElementById("subtitle").innerHTML = Person.speak(p1) // important, 'this' keyword does not work inside static keyword.
