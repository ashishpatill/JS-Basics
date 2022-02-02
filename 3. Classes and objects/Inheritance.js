class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age; 
    }

    speak() {
        return `Hello my name is ${this.name} and age is ${this.age}.`
    }
}

const p1 = new Person("Ashish", 30);
p1.speak()

class Employee extends Person {
    constructor(name, age, id, dept) {
        super(name, age) // important
        this.id = id
        this.department = dept
    }

    workDetails() {
        return `I am working in ${this.department} department and my employee id is ${this.id}.`
    }
}

const employee = new Employee("Ashish", 32, "A123", "Tech")
document.getElementById("subtitle").innerHTML = employee.speak() + " " +  employee.workDetails()
