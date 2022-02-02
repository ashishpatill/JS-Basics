class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age; 
    }

    speak() {
        const output = `Hello my name is ${this.name} and age is ${this.age}.`;
        console.log(output)
        return output
    }
}

const p1 = new Person("Ashish", 30);
document.getElementById("subtitle").innerHTML = p1.speak()