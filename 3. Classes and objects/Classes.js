class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age; 
    }

    speak() {
        console.log(`Hello my name is ${this.name} and age is ${this.age}`);
    }
}

const p1 = new Person("Ashish", 30);
p1.speak()