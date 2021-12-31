const person = {
    firstName: "Ashish",
    age: 30,
    height: 178
}

//getting info from object without destructuring
console.log("without destructuring: " + person.firstName, person.age, person.height)

// destructure object
const {firstName, age, height} = person
console.log("destructuring: " + firstName, age, height)

document.getElementById("title").innerHTML = `name: ${firstName}, age: ${age}, height: ${height}`