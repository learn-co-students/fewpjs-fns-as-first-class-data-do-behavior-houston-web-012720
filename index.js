/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let timeNum = parseInt(time.split(":")[0], 10)
  if (timeNum < 12) {
    return "Good Morning"
  }
  else if (timeNum <= 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(time) {
  document.querySelector("#greeting").innerText = (time)
}
