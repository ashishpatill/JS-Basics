// Callback function

const myDisplayer = (sum) => {
    document.getElementById("title").innerHTML = sum
};

// const myCalculator = (num1, num2) => {
//     return num1 + num2
// }

//myDisplayer(myCalculator(5,10))

// Passing myDisplayer function as argument to myCalculator function
const myCalculator = (num1, num2, displayFunction = (sum) => {
    document.getElementById("title").innerHTML = sum
}) => {
    displayFunction(num1 + num2)
}

// Calling myCalculator function
myCalculator(10,10)