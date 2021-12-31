// creating a promise
const loginPromise = new Promise((success, failure) => {
    if (true) {
        success("Logged in")
    } else {
        failure("login unsuccessfull")
    }
})

// calling a promise with .then
loginPromise
.then(result => result + " successfully")
.then(result2 => {
    document.getElementById("title").innerHTML = result2
}).catch(loginError => {
    console.log(loginError)
})

// Calling a promise with Async await
const login = async() => {
    try {
        result = await loginPromise()
        return result + "successfully"
    } catch(error) {
        console.log(error)
    }
}

// calling async function
login().then(result => {
    document.getElementById("title").innerHTML = result
})

// Call an api with async await
const getPhotos = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos/1")
        const data = await response.json()
        return data
    } catch {
        return error
    }
}

getPhotos().then(result => {
    console.log(result)
    document.getElementById("response").innerHTML = "title from api: " + result.title
})