// Change HTML Title from javascript
function changeTitle() {
    if (document.getElementById('123').innerText == "DOM Basics") {
        document.getElementById('123').innerText = "Courses"
    } else {
        document.getElementById('123').innerText = "DOM Basics"
    }
}

// Modify HTML attributes from Javascript
function modifyAttributes() {
    let section = document.querySelector(".myClass")
    section.innerText = "Course Topics"
    section.setAttribute("class", "Topics")

    let img = document.querySelector("img")
    img.setAttribute("width", 300)
    console.log(document.querySelector(".Topics"))
}

// Add event listner to HTML elements from javascript
let input = document.querySelector("input")
let button = document.querySelector(".submit")
console.log(button.textContent)
button.addEventListener("click",function(){
    console.log("Submit is clicked")
    var ul = document.getElementById("topicList")
    
    var li = document.createElement("li")
    li.setAttribute("id","topic2")
    li.innerText = input.value
    ul.appendChild(li)

    var image = document.createElement("img")
    image.setAttribute("src","ios.jpeg")
    image.setAttribute("width", 300)
    ul.appendChild(image)
})