//array
const arr = [7,5,1,4]
arr.push(2)
arr.push(43)
arr.pop()
console.log("array: " + arr)
console.log("array 2nd item: " + arr[2])

//for each loop
var addition = 0
function myFunction(item, index) {
    addition = addition + item
}

arr.forEach(myFunction)
console.log(`array sum: ${addition}`)

arr.forEach(function(a) {
    console.log(`For each loop: ${a}`)
})

//While loop
var count = 0
while(count < 4) {
    console.log("i am in a while loop")
    count++
}

//Do while loop
count = 0
do{
    console.log("i am in a do while loop")
    count++ 
} while(count<4)

//Dictionaries
var personDict = {"name":"Akash","age":26}
console.log(`Dictionary: ${personDict}`)
console.log(`Dictionary name: ${personDict['name']}`)

//objects
var person1 = {name : "Ashish", 
            age : 32}
person1.height = "5.8"
person1.isMale = true
console.log(`object: ${person1}`)
console.log("name: " + person1.name)

var person2 = {name: "Prerna", 
               age: 29,
               isMale: false  }

//Array of objects
var personArr = [person1, person2]
console.log(personArr[0].name)
console.log(personArr[1].name)