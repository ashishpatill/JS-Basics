const loginPromise = new Promise((success, failure) => {
    if (false) {
        success("It worked")
    } else {
        failure("It is rejected")
    }
})

loginPromise
.then(result => result + " successfully")
.then(result2 => {
    document.getElementById("title").innerHTML = result2
}).catch(loginError => {
    console.log(loginError)
})

// Async await
async function login() {
    try {
        result = await loginPromise() + "successfully"
        document.getElementById("title").innerHTML = result
    } catch(error) {
        console.log(error)
    }
}

login()

