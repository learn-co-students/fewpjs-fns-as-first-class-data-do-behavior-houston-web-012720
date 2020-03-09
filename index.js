/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
    let value = timeString.split(":")
    let v = parseInt(value[0], 10)
    if (v < 12) {
        return "Good Morning"
    }
    if (v >= 12 && v <= 17) {
        return "Good Afternoon"
    }

    if (v > 17) {
        return "Good Evening"
    }

}

/* Write your implementation of displayMessage() */

function displayMessage(string) {

    let greeting = document.getElementById('greeting')
        // greeting.innerHTML = `<h1> ${string} </h1>`
    greeting.innerText = string
}