/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(greeting) {
  let g = document.querySelector("h1#greeting")
  g.innerText = greeting
}

function greet(time) {
  let hour = parseInt(time.split(":")[0])
  return hour < 12 ? "Good Morning" : hour >= 12 && hour <= 17 ? "Good Afternoon" : "Good Evening"
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
